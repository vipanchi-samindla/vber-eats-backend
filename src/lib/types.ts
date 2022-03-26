import { rolesEnum } from '@src/utils/rolesEnum';
import { Collection, ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  role: rolesEnum;
  profileImage?: string;
}

export interface Restaurant {
  _id?: ObjectId;
  name: string;
  phone: string;
  address: string;
  logo?: string;
  createdAt: string;
}

export interface Database {
  users: Collection<User>;
  restaurants: Collection<Restaurant>;
}
