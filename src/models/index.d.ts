import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShareMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BudgetEntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly shares?: (Share | null)[] | null;
  readonly paidEntries?: (BudgetEntry | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Share {
  readonly id: string;
  readonly amount: number;
  readonly userId: string;
  readonly budgetEntryId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Share, ShareMetaData>);
  static copyOf(source: Share, mutator: (draft: MutableModel<Share, ShareMetaData>) => MutableModel<Share, ShareMetaData> | void): Share;
}

export declare class BudgetEntry {
  readonly id: string;
  readonly name: string;
  readonly shares?: (Share | null)[] | null;
  readonly paidByUserId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BudgetEntry, BudgetEntryMetaData>);
  static copyOf(source: BudgetEntry, mutator: (draft: MutableModel<BudgetEntry, BudgetEntryMetaData>) => MutableModel<BudgetEntry, BudgetEntryMetaData> | void): BudgetEntry;
}