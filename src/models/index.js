// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Share, BudgetEntry } = initSchema(schema);

export {
  User,
  Share,
  BudgetEntry
};