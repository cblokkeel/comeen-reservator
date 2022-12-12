import { zh } from 'h3-zod';
import UsersModel from '~~/server/models/Users.model';
import { UserSchema } from '~~/server/validations';

export default defineEventHandler(async (event) => {
  const body = await zh.useValidatedBody(event, UserSchema);

  try {
    const createdUser = await UsersModel.create(body);
    return createdUser;
  } catch (error: any) {
    throw createError({ message: error.message });
  }
});
