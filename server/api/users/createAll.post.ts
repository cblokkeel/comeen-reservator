import { zh } from 'h3-zod';
import { User } from '~~/lib/types';
import UsersModel from '~~/server/models/Users.model';
import { MultipleUsersSchema } from './../../validations/index';

export default defineEventHandler(async (event) => {
  const body = await zh.useValidatedBody(event, MultipleUsersSchema);

  const userIds = body.users.map((user) => user.userId);
  if (await UsersModel.exists({ userId: { $in: userIds } })) {
    throw createError({ message: 'User already exists' });
  }

  try {
    return await UsersModel.create(body.users);
  } catch (error: any) {
    console.log('error users.createAll', error);
    throw createError({ message: error.message });
  }
});
