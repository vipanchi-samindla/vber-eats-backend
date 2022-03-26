import { Collection } from 'mongodb';

export interface User {
  _id?: string;
  name?: string;
}

export interface Database {
  users: Collection<User>;
}
