import { ConnectOptions, MongoClient } from 'mongodb';
import { Database, Restaurant, User } from '../lib/types';

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const url = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  const db = client.db();

  return {
    users: db.collection<User>('users'),
    restaurants: db.collection<Restaurant>('restaurants'),
  };
};
