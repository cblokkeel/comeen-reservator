import { Team } from './../../../lib/types/index.d';
import TeamModel from '~~/server/models/Team.model';

export default defineEventHandler(async (event): Promise<Team[]> => {
  return await TeamModel.find();
});
