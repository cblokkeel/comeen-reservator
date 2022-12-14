import { zh } from 'h3-zod';
import TeamModel from '~~/server/models/Team.model';
import { TeamSchema } from '~~/server/validations';

export default defineEventHandler(async (event) => {
  const body = await zh.useValidatedBody(event, TeamSchema);

  if (await TeamModel.exists({ name: body.name })) {
    throw createError({ message: 'Team already exists' });
  }

  try {
    const createdTeam = await TeamModel.create(body);
    return createdTeam;
  } catch (error: any) {
    console.log('error teams.create', error);
    throw createError({ message: error.message });
  }
});
