import { StackScreenProps } from "@react-navigation/stack"
import { API, graphqlOperation } from "aws-amplify"
import { FC, useEffect, useRef, useState } from "react"
import { Share, Text, TextInput, TouchableOpacity, View } from "react-native"
import { formatNumber } from "react-native-currency-input"
import { THEME } from "../../../theme"
import { BudgetEntry, User } from "../../API"
import { ContainerView } from "../../components/container–view/container-view"
import { CurrencyInput } from "../../components/input/currency-input"
import { Input } from "../../components/input/input"
import { RadioBox } from "../../components/radio-box/radio-box"
import { Title } from "../../components/title/title"
import { createBudgetEntry, createShare } from "../../graphql/mutations"
import { listUsers } from "../../graphql/queries"

export const AddEntryScreen: FC<StackScreenProps<any>> = ({
  navigation: {
    navigate,
  }
}) => {
  const [title, setTitle] = useState('');
  const [paidBy, setPaidBy] = useState<'me' | 'other'>('me');
  const [amount, setAmount] = useState<number | undefined>();
  const [share, setShare] = useState<number | undefined>();

  const otherPersonsAmount = amount && share ? amount * (100 - share) / 100 : undefined;

  const titleInputRef = useRef<TextInput>(null);
  const amountInputRef = useRef<TextInput>(null);
  const shareInputRef = useRef<TextInput>(null);


  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (API.graphql(graphqlOperation(listUsers)) as Promise<{ data: {
      listUsers: {
        items: User[]
      }
    }}>).then(({ data }) => {
      setUsers(data.listUsers.items);
    });
  }, []);

  const handleSave = async () => {
    const { data: {
      createBudgetEntry: budgetEntry
    }} = await API.graphql(graphqlOperation(createBudgetEntry, {
      input: {
        name: title,
        paidByUserId: paidBy === 'me' ? users[0].id : users[1].id,
      }
    })) as { data: { createBudgetEntry: BudgetEntry } };
    
    await API.graphql(graphqlOperation(createShare, {
      input: {
        amount: amount - otherPersonsAmount,
        budgetEntryId: budgetEntry?.id,
        userId: users[0].id,
        isSettled: false
      }
    })) as { data: { createShare: Share } };
    await API.graphql(graphqlOperation(createShare, {
      input: {
        amount: otherPersonsAmount,
        budgetEntryId: budgetEntry?.id,
        userId: users[1].id,
        isSettled: false
      }
    })) as { data: { createShare: Share } };

    navigate('Root');
  };
  
  return <ContainerView>
    <Title level={1}>Add Entry</Title>
    <Input 
      label="Title"
      placeholder="Enter here"
      value={title}
      onChangeText={
        (value) => setTitle(value)
      } 
      ref={titleInputRef}
      onSubmitEditing={() => {
        amountInputRef.current?.focus();
      }}
    />
    <RadioBox
      label='Paid by'
      options={['me', 'other']}
      value={paidBy}
      onChange={
        (option) => setPaidBy(option as 'me' | 'other')
      }
    />
    <CurrencyInput 
      label="Amount" 
      placeholder="Enter here"
      unit={'€'}
      value={amount}
      onChangeValue={
        (value) => setAmount(value)
      }
      ref={amountInputRef}
    />
    <CurrencyInput
      label='Your share'
      placeholder='Enter here'
      unit={'%'}
      value={share}
      maxValue={100}
      onChangeValue={
        (value) => setShare(value)
      }
      ref={shareInputRef}
    />
    {
      amount && otherPersonsAmount ? <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Text>Your share</Text>
        <Text>{formatNumber(amount - otherPersonsAmount, {
          precision: 2,
        })} €</Text>
      </View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Text>The other person's share</Text>
        <Text>{formatNumber(otherPersonsAmount, {
          precision: 2,
        })} €</Text>
      </View>
      </>: null
    }
    <View style={{
      flex: 1,
      width: '100%',
    }}>
    <TouchableOpacity
      disabled={!title || !amount || !share}
      onPress={() => {
        handleSave()
      }}
      style={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.colors.primary,
        borderRadius: 10,
      }}>
        <Text style={{
          color: THEME.colors.white,
        }}>Save</Text>
      </TouchableOpacity>
    </View>
  </ContainerView>
}