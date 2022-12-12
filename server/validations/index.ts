import * as z from 'zod';

export const UserSchema = z.object({
  name: z.string(),
  userId: z.string(),
  deskId: z.string(),
  presenceDays: z.array(
    z.enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY']),
  ),
  team: z.string().nullish(),
});

export const MultipleUsersSchema = z.object({ users: z.array(UserSchema) });

export const TeamSchema = z.object({
  name: z.string(),
  members: z.array(z.string()),
});
