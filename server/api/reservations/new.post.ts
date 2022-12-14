import { createReservation } from './../../src/reservations';
import * as zh from 'h3-zod';
import { ReservationSchema } from '~~/server/validations';
import { Reservation } from '~~/lib/types';

export default defineEventHandler(async (event) => {
  const { startDate, endDate, cookie, users } = await zh.useValidatedBody(
    event,
    ReservationSchema,
  );

  if (endDate < startDate || endDate.getMonth() > startDate.getMonth() + 3) {
    throw createError('Dates invalids');
  }

  // @ts-ignore
  await createReservation({ startDate, endDate, cookie, users });
  return {
    message: 'fdp',
  };
});
