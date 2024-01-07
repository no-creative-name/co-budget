/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBudgetEntry = /* GraphQL */ `
  subscription OnCreateBudgetEntry {
    onCreateBudgetEntry {
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
export const onUpdateBudgetEntry = /* GraphQL */ `
  subscription OnUpdateBudgetEntry {
    onUpdateBudgetEntry {
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
export const onDeleteBudgetEntry = /* GraphQL */ `
  subscription OnDeleteBudgetEntry {
    onDeleteBudgetEntry {
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
export const onCreateShare = /* GraphQL */ `
  subscription OnCreateShare {
    onCreateShare {
      id
      amount
      userId
      budgetEntryId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateShare = /* GraphQL */ `
  subscription OnUpdateShare {
    onUpdateShare {
      id
      amount
      userId
      budgetEntryId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteShare = /* GraphQL */ `
  subscription OnDeleteShare {
    onDeleteShare {
      id
      amount
      userId
      budgetEntryId
      createdAt
      updatedAt
    }
  }
`;
