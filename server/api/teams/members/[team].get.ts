import UsersModel from '~~/server/models/Users.model';
import TeamModel from '~~/server/models/Team.model';
import { Team, User } from '~~/lib/types';

export default defineEventHandler(async (event): Promise<User[]> => {
  const teamName = event.context.params.team;

  const team: Team | null = await TeamModel.findOne({ name: teamName });

  if (!team) {
    throw createError({ message: 'Team not found' });
  }

  return await UsersModel.find({ _id: { $in: team.members } });
});
