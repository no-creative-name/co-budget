/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      shares {
        items {
          id
          amount
          userId
          budgetEntryId
          createdAt
          updatedAt
        }
        nextToken
      }
      paidEntries {
        items {
          id
          name
          paidByUserId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      shares {
        items {
          id
          amount
          userId
          budgetEntryId
          createdAt
          updatedAt
        }
        nextToken
      }
      paidEntries {
        items {
          id
          name
          paidByUserId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      shares {
        items {
          id
          amount
          userId
          budgetEntryId
          createdAt
          updatedAt
        }
        nextToken
      }
      paidEntries {
        items {
          id
          name
          paidByUserId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBudgetEntry = /* GraphQL */ `
  mutation CreateBudgetEntry(
    $input: CreateBudgetEntryInput!
    $condition: ModelBudgetEntryConditionInput
  ) {
    createBudgetEntry(input: $input, condition: $condition) {
      id
      name
      shares {
        items {
          id
          amount
          userId
          budgetEntryId
          createdAt
          updatedAt
        }
        nextToken
      }
      paidByUserId
      createdAt
      updatedAt
    }
  }
`;
export const updateBudgetEntry = /* GraphQL */ `
  mutation UpdateBudgetEntry(
    $input: UpdateBudgetEntryInput!
    $condition: ModelBudgetEntryConditionInput
  ) {
    updateBudgetEntry(input: $input, condition: $condition) {
      id
      name
      shares {
        items {
          id
          amount
          userId
          budgetEntryId
          createdAt
          updatedAt
        }
        nextToken
      }
      paidByUserId
      createdAt
      updatedAt
    }
  }
`;
export const deleteBudgetEntry = /* GraphQL */ `
  mutation DeleteBudgetEntry(
    $input: DeleteBudgetEntryInput!
    $condition: ModelBudgetEntryConditionInput
  ) {
    deleteBudgetEntry(input: $input, condition: $condition) {
      id
      name
      shares {
        items {
          id
          amount
          userId
          budgetEntryId
          createdAt
          updatedAt
        }
        nextToken
      }
      paidByUserId
      createdAt
      updatedAt
    }
  }
`;
export const createShare = /* GraphQL */ `
  mutation CreateShare(
    $input: CreateShareInput!
    $condition: ModelShareConditionInput
  ) {
    createShare(input: $input, condition: $condition) {
      id
      amount
      userId
      budgetEntryId
      createdAt
      updatedAt
    }
  }
`;
export const updateShare = /* GraphQL */ `
  mutation UpdateShare(
    $input: UpdateShareInput!
    $condition: ModelShareConditionInput
  ) {
    updateShare(input: $input, condition: $condition) {
      id
      amount
      userId
      budgetEntryId
      createdAt
      updatedAt
    }
  }
`;
export const deleteShare = /* GraphQL */ `
  mutation DeleteShare(
    $input: DeleteShareInput!
    $condition: ModelShareConditionInput
  ) {
    deleteShare(input: $input, condition: $condition) {
      id
      amount
      userId
      budgetEntryId
      createdAt
      updatedAt
    }
  }
`;
