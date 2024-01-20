import React, { FC } from 'react';
import { Animated, FlatList, FlatListProps, Text, View } from 'react-native';
import { formatNumber } from 'react-native-currency-input';
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import { THEME } from '../../../theme';
import styles from './swipe-to-delete-flatlist.module.css';

type Row = {
  id: string;
  title: string;
  amount: number;
}

type SwipeToDeleteFlatListProps = {
  rows: Row[];
  onDeleteItem: (id: string) => void;
  onSettleItem: (id: string) => void;
};

const renderLeftActions = (
  progress: Animated.AnimatedInterpolation<number>,
  dragX: Animated.AnimatedInterpolation<number>,
  onSettle: () => void,
) => {
  const scale = dragX.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <TouchableOpacity style={styles.swipedRowLeft} onPress={onSettle}>
      <Animated.View style={[{transform: [{scale}]}]}>
        <Text style={styles.settleButtonText}>Settle</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const renderRightActions = (
  progress: Animated.AnimatedInterpolation<number>,
  dragX: Animated.AnimatedInterpolation<number>,
  onDelete: () => void,
) => {
  const opacity = dragX.interpolate({
    inputRange: [-50, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <TouchableOpacity style={styles.swipedRowRight} onPress={onDelete}>
      <Animated.View style={[{opacity}]}>
          <Text style={styles.deleteButtonText}>Delete</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const Item: FC<Row & {
  onDelete: (id: string) => void;
  onSettle: (id: string) => void;
}> = ({
  title,
  id,
  amount,
  onDelete,
  onSettle
}) => (
  <Swipeable 
  renderLeftActions={(progress, dragX) => renderLeftActions(progress, dragX, () => onSettle(id))}
  renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, () => onDelete(id))}>
    <View style={styles.row}>
      <Text>{title}</Text>
      <Text style={{
        color: amount > 0 ? THEME.colors.primary : THEME.colors.black,
      }}>{formatNumber(amount, { precision: 2})} €</Text>
    </View>
  </Swipeable>
);

export const SwipeToDeleteFlatList: FC<SwipeToDeleteFlatListProps & Pick<FlatListProps<Row>, 'refreshControl'>> = ({
  rows,
  onDeleteItem,
  onSettleItem,
  refreshControl,
}) => {
  const renderItem = (dataItem: Row) => (
    <Item {...dataItem} onDelete={onDeleteItem} onSettle={onSettleItem} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={rows}
        renderItem={i => renderItem(i.item)}
        keyExtractor={item => item.id}
        refreshControl={refreshControl}
        ItemSeparatorComponent={() => <View style={{
          height: 10
        }} />}
      />
    </View>
  );
};