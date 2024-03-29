/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName?: string | null,
  shares?: ModelShareConnection | null,
  paidEntries?: ModelBudgetEntryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelShareConnection = {
  __typename: "ModelShareConnection",
  items:  Array<Share | null >,
  nextToken?: string | null,
};

export type Share = {
  __typename: "Share",
  id: string,
  amount: number,
  userId: string,
  budgetEntryId: string,
  isSettled: boolean,
  createdAt: string,
  updatedAt: string,
};

export type ModelBudgetEntryConnection = {
  __typename: "ModelBudgetEntryConnection",
  items:  Array<BudgetEntry | null >,
  nextToken?: string | null,
};

export type BudgetEntry = {
  __typename: "BudgetEntry",
  id: string,
  name: string,
  shares?: ModelShareConnection | null,
  paidByUserId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateBudgetEntryInput = {
  id?: string | null,
  name: string,
  paidByUserId: string,
};

export type ModelBudgetEntryConditionInput = {
  name?: ModelStringInput | null,
  paidByUserId?: ModelIDInput | null,
  and?: Array< ModelBudgetEntryConditionInput | null > | null,
  or?: Array< ModelBudgetEntryConditionInput | null > | null,
  not?: ModelBudgetEntryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBudgetEntryInput = {
  id: string,
  name?: string | null,
  paidByUserId?: string | null,
};

export type DeleteBudgetEntryInput = {
  id: string,
};

export type CreateShareInput = {
  id?: string | null,
  amount: number,
  userId: string,
  budgetEntryId: string,
  isSettled: boolean,
};

export type ModelShareConditionInput = {
  amount?: ModelFloatInput | null,
  userId?: ModelIDInput | null,
  budgetEntryId?: ModelIDInput | null,
  isSettled?: ModelBooleanInput | null,
  and?: Array< ModelShareConditionInput | null > | null,
  or?: Array< ModelShareConditionInput | null > | null,
  not?: ModelShareConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateShareInput = {
  id: string,
  amount?: number | null,
  userId?: string | null,
  budgetEntryId?: string | null,
  isSettled?: boolean | null,
};

export type DeleteShareInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelBudgetEntryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  paidByUserId?: ModelIDInput | null,
  and?: Array< ModelBudgetEntryFilterInput | null > | null,
  or?: Array< ModelBudgetEntryFilterInput | null > | null,
  not?: ModelBudgetEntryFilterInput | null,
};

export type ModelShareFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  userId?: ModelIDInput | null,
  budgetEntryId?: ModelIDInput | null,
  isSettled?: ModelBooleanInput | null,
  and?: Array< ModelShareFilterInput | null > | null,
  or?: Array< ModelShareFilterInput | null > | null,
  not?: ModelShareFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidEntries?:  {
      __typename: "ModelBudgetEntryConnection",
      items:  Array< {
        __typename: "BudgetEntry",
        id: string,
        name: string,
        paidByUserId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidEntries?:  {
      __typename: "ModelBudgetEntryConnection",
      items:  Array< {
        __typename: "BudgetEntry",
        id: string,
        name: string,
        paidByUserId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidEntries?:  {
      __typename: "ModelBudgetEntryConnection",
      items:  Array< {
        __typename: "BudgetEntry",
        id: string,
        name: string,
        paidByUserId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBudgetEntryMutationVariables = {
  input: CreateBudgetEntryInput,
  condition?: ModelBudgetEntryConditionInput | null,
};

export type CreateBudgetEntryMutation = {
  createBudgetEntry?:  {
    __typename: "BudgetEntry",
    id: string,
    name: string,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidByUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBudgetEntryMutationVariables = {
  input: UpdateBudgetEntryInput,
  condition?: ModelBudgetEntryConditionInput | null,
};

export type UpdateBudgetEntryMutation = {
  updateBudgetEntry?:  {
    __typename: "BudgetEntry",
    id: string,
    name: string,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidByUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBudgetEntryMutationVariables = {
  input: DeleteBudgetEntryInput,
  condition?: ModelBudgetEntryConditionInput | null,
};

export type DeleteBudgetEntryMutation = {
  deleteBudgetEntry?:  {
    __typename: "BudgetEntry",
    id: string,
    name: string,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidByUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateShareMutationVariables = {
  input: CreateShareInput,
  condition?: ModelShareConditionInput | null,
};

export type CreateShareMutation = {
  createShare?:  {
    __typename: "Share",
    id: string,
    amount: number,
    userId: string,
    budgetEntryId: string,
    isSettled: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShareMutationVariables = {
  input: UpdateShareInput,
  condition?: ModelShareConditionInput | null,
};

export type UpdateShareMutation = {
  updateShare?:  {
    __typename: "Share",
    id: string,
    amount: number,
    userId: string,
    budgetEntryId: string,
    isSettled: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShareMutationVariables = {
  input: DeleteShareInput,
  condition?: ModelShareConditionInput | null,
};

export type DeleteShareMutation = {
  deleteShare?:  {
    __typename: "Share",
    id: string,
    amount: number,
    userId: string,
    budgetEntryId: string,
    isSettled: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidEntries?:  {
      __typename: "ModelBudgetEntryConnection",
      items:  Array< {
        __typename: "BudgetEntry",
        id: string,
        name: string,
        paidByUserId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName?: string | null,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
      } | null,
      paidEntries?:  {
        __typename: "ModelBudgetEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBudgetEntryQueryVariables = {
  id: string,
};

export type GetBudgetEntryQuery = {
  getBudgetEntry?:  {
    __typename: "BudgetEntry",
    id: string,
    name: string,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidByUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBudgetEntriesQueryVariables = {
  filter?: ModelBudgetEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBudgetEntriesQuery = {
  listBudgetEntries?:  {
    __typename: "ModelBudgetEntryConnection",
    items:  Array< {
      __typename: "BudgetEntry",
      id: string,
      name: string,
      shares?:  {
        __typename: "ModelShareConnection",
        nextToken?: string | null,
      } | null,
      paidByUserId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetShareQueryVariables = {
  id: string,
};

export type GetShareQuery = {
  getShare?:  {
    __typename: "Share",
    id: string,
    amount: number,
    userId: string,
    budgetEntryId: string,
    isSettled: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSharesQueryVariables = {
  filter?: ModelShareFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSharesQuery = {
  listShares?:  {
    __typename: "ModelShareConnection",
    items:  Array< {
      __typename: "Share",
      id: string,
      amount: number,
      userId: string,
      budgetEntryId: string,
      isSettled: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidEntries?:  {
      __typename: "ModelBudgetEntryConnection",
      items:  Array< {
        __typename: "BudgetEntry",
        id: string,
        name: string,
        paidByUserId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidEntries?:  {
      __typename: "ModelBudgetEntryConnection",
      items:  Array< {
        __typename: "BudgetEntry",
        id: string,
        name: string,
        paidByUserId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidEntries?:  {
      __typename: "ModelBudgetEntryConnection",
      items:  Array< {
        __typename: "BudgetEntry",
        id: string,
        name: string,
        paidByUserId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBudgetEntrySubscription = {
  onCreateBudgetEntry?:  {
    __typename: "BudgetEntry",
    id: string,
    name: string,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidByUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBudgetEntrySubscription = {
  onUpdateBudgetEntry?:  {
    __typename: "BudgetEntry",
    id: string,
    name: string,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidByUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBudgetEntrySubscription = {
  onDeleteBudgetEntry?:  {
    __typename: "BudgetEntry",
    id: string,
    name: string,
    shares?:  {
      __typename: "ModelShareConnection",
      items:  Array< {
        __typename: "Share",
        id: string,
        amount: number,
        userId: string,
        budgetEntryId: string,
        isSettled: boolean,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    paidByUserId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateShareSubscription = {
  onCreateShare?:  {
    __typename: "Share",
    id: string,
    amount: number,
    userId: string,
    budgetEntryId: string,
    isSettled: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShareSubscription = {
  onUpdateShare?:  {
    __typename: "Share",
    id: string,
    amount: number,
    userId: string,
    budgetEntryId: string,
    isSettled: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShareSubscription = {
  onDeleteShare?:  {
    __typename: "Share",
    id: string,
    amount: number,
    userId: string,
    budgetEntryId: string,
    isSettled: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
