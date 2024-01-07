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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      paidEntries {
        items {
          id
          name
          paidByUserId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      paidEntries {
        items {
          id
          name
          paidByUserId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      paidEntries {
        items {
          id
          name
          paidByUserId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      paidByUserId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      paidByUserId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      paidByUserId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
