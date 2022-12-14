import * as z from 'zod';

const dateSchema = z.preprocess((arg) => {
  if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
}, z.date());

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

export const ReservationSchema = z.object({
  startDate: dateSchema,
  endDate: dateSchema,
  cookie: z.string(),
  users: z.array(UserSchema),
});
