// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { rolesEnum } from '../src/utils/rolesEnum';
import { connectDatabase } from '../src/database';
import { User } from '../src/lib/types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');

const users: User[] = [
  {
    username: 'yogesh',
    email: 'yogesh@gmail.com',
    password: bcrypt.hash('yogeshvipanchi', 10),
    createdAt: new Date().toISOString(),
    role: rolesEnum.USER,
    profileImage: '',
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
