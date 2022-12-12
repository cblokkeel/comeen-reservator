import * as z from 'zod';

export const UserSchema = z.object({
  name: z.string(),
  desk: z.string(),
  prsencesDays: z.array(
    z.enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY']),
  ),
});

export const TeamSchema = z.object({
  name: z.string(),
  users: z.array(z.string()),
});
