// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { connectDatabase } from '../src/database';

const clear = async () => {
  try {
    console.log('[clear] : running...');
    const db = await connectDatabase();
    const users = await db.users.find({}).toArray();
    console.log('users', users);
    if (users.length > 0) {
      await db.users.drop();
    }
    console.log('[clear] : success');
  } catch {
    throw new Error('failed to clear database');
  }
};

clear();
