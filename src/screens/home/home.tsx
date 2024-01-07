
import type { StackScreenProps } from '@react-navigation/stack';
import { API, graphqlOperation } from "aws-amplify";
import React, { FC, useCallback, useEffect, useState } from "react";
import { RefreshControl, Text, TouchableOpacity, View } from "react-native";
import { formatNumber } from 'react-native-currency-input';
import { THEME } from '../../../theme';
import { BudgetEntry, Share, User } from "../../API";
import { ContainerView } from "../../components/container–view/container-view";
import { EntryBox } from "../../components/entry-box/entry-box";
import { listBudgetEntries, listShares, listUsers } from "../../graphql/queries";

export const HomeScreen: FC<StackScreenProps<any>> = ({
  navigation: {
    navigate
  }
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const [currentUserId, setCurrentUserId] = React.useState<string | undefined>();
  const [budgetEntries, setBudgetEntries] = React.useState<BudgetEntry[]>([]);
  const [shares, setShares] = React.useState<Share[]>([]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadBudgetEntries();
    await loadShares();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    (API.graphql(graphqlOperation(listUsers)) as Promise<{ data: {
      listUsers: {
        items: User[]
      }
    }}>).then(({ data }) => {
      setCurrentUserId(data.listUsers.items[0].id);
    });
  }, []);

  const loadBudgetEntries = async () => {
    (API.graphql(graphqlOperation(listBudgetEntries)) as Promise<{ data: {
      listBudgetEntries: {
        items: BudgetEntry[]
      }
    }}>).then(({ data }) => {
      setBudgetEntries(data.listBudgetEntries.items.sort((a, b) => {
        return new Date(b?.createdAt || 0).getTime() - new Date(a?.createdAt || 0).getTime();
      }));
    });
  };

  const loadShares = async () => {
    (API.graphql(graphqlOperation(listShares)) as Promise<{ data: {
      listShares: {
        items: Share[]
      }
    }}>).then(({ data }) => {
      setShares(data.listShares.items);
    });
  }

  useEffect(() => {
    loadBudgetEntries();
    loadShares();
  }, []);

  const getDisplayedAmount = (budgetEntryId: string) => {
    const currentBudgetEntry = budgetEntries.filter(entry => entry.id === budgetEntryId)?.[0];
    const sharesForBudgetEntry = shares.filter(share => share.budgetEntryId === budgetEntryId);
    const amountThatCurrentUserPaid = currentBudgetEntry?.paidByUserId === currentUserId ? sharesForBudgetEntry.reduce((aggr, share) => aggr + (share?.amount || 0), 0) : 0;
    const amountThatCurrentUserOwes = sharesForBudgetEntry.filter(share => share.userId === currentUserId)?.reduce((aggr, share) => aggr + (share?.amount || 0), 0);
    
    return amountThatCurrentUserPaid - amountThatCurrentUserOwes;
  }
  
    return <>
    <View style={{
      flex: 1,
    }}>
      <TouchableOpacity
      onPress={() => {
        navigate('AddEntry')
      }}
      style={{
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.colors.primary,
        borderRadius: 10,
      }}>
        <Text style={{
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
        }}>+</Text>
      </TouchableOpacity>
      <ContainerView 
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }>
        {budgetEntries?.map(entry => {
          return <EntryBox key={entry.id}>
          <Text>{entry.name}</Text>
          <Text style={{
            color: getDisplayedAmount(entry.id) > 0 ? 'green' : 'red'
          }}>{formatNumber(getDisplayedAmount(entry.id), { precision: 2})} €</Text>
          </EntryBox>;
        })}
      </ContainerView>
    </View>
    </>;
}