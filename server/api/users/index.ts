import { User } from '~~/lib/types';
import UsersModel from '~~/server/models/Users.model';

export default defineEventHandler(async (event): Promise<User[]> => {
  return await UsersModel.find();
});
