
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect } from "react";
import { BudgetEntry, Share, User } from "../../API";
import { ContainerView } from "../../components/container–view/container-view";
import { EntryBox } from "../../components/entry-box/entry-box";
import { Title } from "../../components/title/title";
import { createShare } from "../../graphql/mutations";
import { listBudgetEntries, listShares, listUsers } from "../../graphql/queries";

export const HomeScreen = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [currentUserId, setCurrentUserId] = React.useState<string | undefined>();
  const [budgetEntries, setBudgetEntries] = React.useState<BudgetEntry[]>([]);
  const [shares, setShares] = React.useState<Share[]>([]);
  const [once, setOnce] = React.useState(false);

  useEffect(() => {
    (API.graphql(graphqlOperation(listUsers)) as Promise<{ data: {
      listUsers: {
        items: User[]
      }
    }}>).then(({ data }) => {
      setUsers(data.listUsers.items);
      setCurrentUserId(data.listUsers.items[0].id);
    });
  }, []);


  // add a useEffect to create mock budget entries
 /*  useEffect(() => { 
    if (users.length && !once) {
      const initMockData = async () => {
        const budgetEntry = await API.graphql(graphqlOperation(createBudgetEntry, {
          input: {
            name: 'My first budget entry'
          }
        })) as { data: { createBudgetEntry: BudgetEntry } };
        setBudgetEntries([...budgetEntries, budgetEntry.data.createBudgetEntry]);
      }
      initMockData();
    }
  }, [users, once]); */

  useEffect(() => {
    if(!once && budgetEntries.length) {
      const initMockData = async () => {
        await API.graphql(graphqlOperation(createShare, {
          input: {
            amount: 10,
            budgetEntryId: budgetEntries[0].id,
            userId: users[0].id
          }
        })) as { data: { createShare: Share } };
        await API.graphql(graphqlOperation(createShare, {
          input: {
            amount: 20,
            budgetEntryId: budgetEntries[0].id,
            userId: users[1].id
          }
        })) as { data: { createShare: Share } };
      };
      initMockData();
    }
  }, [budgetEntries, users, once])

  useEffect(() => {
    (API.graphql(graphqlOperation(listBudgetEntries)) as Promise<{ data: {
      listBudgetEntries: {
        items: BudgetEntry[]
      }
    }}>).then(({ data }) => {
      setBudgetEntries(data.listBudgetEntries.items);
    });
  }, []);

  useEffect(() => {
    (API.graphql(graphqlOperation(listShares)) as Promise<{ data: {
      listShares: {
        items: Share[]
      }
      }}>).then(({ data }) => {
        setShares(data.listShares.items);
      });
  });
  
    return <ContainerView>
      <Title level={1}>Entries</Title>
      {currentUserId && <Title level={2}>{users.find((user) => user.id === currentUserId)?.firstName}</Title>}
      {budgetEntries?.map(entry => {
        return <EntryBox key={entry.id}>
        <Title level={2}>{entry.name}</Title>
        <Title level={2}>{shares.filter(share => share.budgetEntryId === entry.id)?.reduce((aggr, share) => aggr + (share?.amount || 0), 0)}</Title>
        <Title level={2}>{shares.filter(share => share.budgetEntryId === entry.id)?.map((share) => share ? `${users.find(user => user.id === share.userId).firstName}: ${share.amount}` : '').join(', ')}</Title>
        </EntryBox>;
      })}
    </ContainerView>;
}