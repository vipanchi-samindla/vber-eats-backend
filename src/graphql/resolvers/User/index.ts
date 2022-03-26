/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcryptjs');
import { Database } from '@src/lib/types';
import { generateToken } from '../../../utils/utils';
import { rolesEnum } from '../../../utils/rolesEnum';
import { RegistrationResponse } from './types';

export const userResolvers = {
  Query: {},
  Mutation: {
    registerUser: async (
      _root: undefined,
      { username, email, password }: { username: string; email: string; password: string },
      { db }: { db: Database }
    ): Promise<RegistrationResponse> => {
      try {
        const insertedUser = await db.users.insertOne({
          username: username,
          email: email,
          password: await bcrypt.hash(password, 10),
          createdAt: new Date().toISOString(),
          role: rolesEnum.USER,
        });
        if (!insertedUser.acknowledged) {
          throw new Error('Registration Failed');
        }
        const user = await db.users.findOne({ email: email });
        if (!user) {
          throw new Error('Registration Failed');
        }
        const token = generateToken(user);
        return {
          token,
          username: user.username,
          email: user.email,
        };
      } catch (error) {
        throw new Error('Registration Failed');
      }
    },
  },
};
