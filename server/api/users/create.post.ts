import { zh } from 'h3-zod';
import UsersModel from '~~/server/models/Users.model';
import { UserSchema } from '~~/server/validations';

export default defineEventHandler(async (event) => {
  const body = await zh.useValidatedBody(event, UserSchema);

  if (await UsersModel.exists({ userId: body.userId })) {
    throw createError({ message: 'User already exists' });
  }

  try {
    const createdUser = await UsersModel.create(body);
    return createdUser;
  } catch (error: any) {
    console.log('error users.create', error);
    throw createError({ message: error.message });
  }
});
