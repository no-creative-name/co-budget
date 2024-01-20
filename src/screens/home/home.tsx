
import type { StackScreenProps } from '@react-navigation/stack';
import { API, graphqlOperation } from "aws-amplify";
import React, { FC, useCallback, useEffect, useState } from "react";
import { RefreshControl, Text, TouchableOpacity, View } from "react-native";
import { formatNumber } from 'react-native-currency-input';
import { THEME } from '../../../theme';
import { BudgetEntry, User } from "../../API";
import { ContainerView } from "../../components/container–view/container-view";
import { SwipeToDeleteFlatList } from '../../components/swipe-to-delete-flatlist/swipe-to-delete-flatlist';
import { deleteBudgetEntry, updateShare } from '../../graphql/mutations';
import { listUsers } from "../../graphql/queries";

export const listBudgetEntriesWithShares = /* GraphQL */ `
  query ListBudgetEntries(
    $filter: ModelBudgetEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBudgetEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        shares {
          items {
            id
            amount
            isSettled
            budgetEntryId
            userId
            createdAt
            updatedAt
          }
        }
        paidByUserId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const HomeScreen: FC<StackScreenProps<any>> = ({
  navigation: {
    navigate
  }
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const [currentUserId, setCurrentUserId] = React.useState<string | undefined>();
  const [budgetEntries, setBudgetEntries] = React.useState<BudgetEntry[]>([]);

  const unsettledBudgetEntries = budgetEntries.filter(entry => entry.shares.items.some(share => !share.isSettled));

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadBudgetEntries();
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
    (API.graphql(graphqlOperation(listBudgetEntriesWithShares)) as Promise<{ data: {
      listBudgetEntries: {
        items: BudgetEntry[]
      }
    }}>).then(({ data }) => {
      setBudgetEntries(data.listBudgetEntries.items.sort((a, b) => {
        return new Date(b?.createdAt || 0).getTime() - new Date(a?.createdAt || 0).getTime();
      }));
    });
  };

  const updateShareAsSettled = async (shareId: string) => {
    await API.graphql(graphqlOperation(updateShare, {
      input: {
        id: shareId,
        isSettled: true
      }
    }));
  }

  const deleteSharesAndBudgetEntry = async (budgetEntryId: string) => {
    await API.graphql(graphqlOperation(deleteBudgetEntry, {
      input: {
        id: budgetEntryId,
      }
    }));
  }

  useEffect(() => {
    loadBudgetEntries();
  }, []);

  const getDisplayedAmount = (budgetEntry: BudgetEntry) => {
    const sharesForBudgetEntry = budgetEntry.shares.items;
    const amountThatCurrentUserPaid = budgetEntry?.paidByUserId === currentUserId ? sharesForBudgetEntry.reduce((aggr, share) => aggr + (share?.amount || 0), 0) : 0;
    const amountThatCurrentUserOwes = sharesForBudgetEntry.filter(share => share.userId === currentUserId)?.reduce((aggr, share) => aggr + (share?.amount || 0), 0);
    
    return amountThatCurrentUserPaid - amountThatCurrentUserOwes;
  }

  const totalAmount = unsettledBudgetEntries.reduce((aggr, entry) => aggr + getDisplayedAmount(entry), 0);
  
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
          color: THEME.colors.white,
          fontSize: 30,
          fontWeight: 'bold',
        }}>+</Text>
      </TouchableOpacity>
      <ContainerView 
      type='safe-area'
      style={{
        flex: 1,
      }}
      >
          <SwipeToDeleteFlatList
            rows={unsettledBudgetEntries?.map(entry => ({
              id: entry.id,
              title: entry.name,
              amount: getDisplayedAmount(entry),
            }))}
            onDeleteItem={async (id) => {
              await deleteSharesAndBudgetEntry(id);
              await loadBudgetEntries();
            }}
            onSettleItem={async (id) => {
              const sharesForBudgetEntry = budgetEntries.find(entry => entry.id === id).shares.items;
              await Promise.all(sharesForBudgetEntry.map(share => updateShareAsSettled(share.id)));
              await loadBudgetEntries();
            }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        {/* {budgetEntries?.map(entry => {
          return <EntryBox key={entry.id}
          onLongPress={async () => {
            await deleteSharesAndBudgetEntry(entry.id);
            await loadBudgetEntries();
            await loadShares();
          }}>
          <Text style={{
            flexShrink: 1,
          }}>{entry.name}</Text>
          <Text style={{
            color: getDisplayedAmount(entry.id) > 0 ? THEME.colors.primary : THEME.colors.black,
          }}>{formatNumber(getDisplayedAmount(entry.id), { precision: 2})} €</Text>
          </EntryBox>;
        })} */}
      </ContainerView>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: THEME.colors.white,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
        <Text>Total</Text>
        <Text style={{
          fontSize: 30,
          color: totalAmount > 0 ? THEME.colors.primary : THEME.colors.black,
        }}>{formatNumber(totalAmount, { precision: 2 })} €</Text>
      </View>
    </View>
    </>;
}