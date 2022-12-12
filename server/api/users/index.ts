import UsersModel from '~~/server/models/Users.model';

export default defineEventHandler(async (event) => {
  return await UsersModel.find();
});
