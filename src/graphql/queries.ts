/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        shares {
          nextToken
        }
        paidEntries {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBudgetEntry = /* GraphQL */ `
  query GetBudgetEntry($id: ID!) {
    getBudgetEntry(id: $id) {
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
export const listBudgetEntries = /* GraphQL */ `
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
          nextToken
        }
        paidByUserId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getShare = /* GraphQL */ `
  query GetShare($id: ID!) {
    getShare(id: $id) {
      id
      amount
      userId
      budgetEntryId
      createdAt
      updatedAt
    }
  }
`;
export const listShares = /* GraphQL */ `
  query ListShares(
    $filter: ModelShareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShares(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
