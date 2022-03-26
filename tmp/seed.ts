// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { connectDatabase } from '../src/database';
import { User } from '../src/lib/types';

const users: User[] = [
  {
    _id: '5d378db94e84753160e08b55',
    name: 'James J.',
  },
  {
    _id: '5d378db94e84753160e08b56',
    name: 'Elizabeth A.',
  },
  {
    _id: '5d378db94e84753160e08b57',
    name: 'Andrew D.',
  },
];

const seed = async () => {
  try {
    console.log('[seed] : running...');
    const db = await connectDatabase();
    for (const user of users) {
      await db.users.insertOne(user);
    }
    console.log('[seed] : success');
  } catch {
    throw new Error('failed to seed database');
  }
};

seed();
