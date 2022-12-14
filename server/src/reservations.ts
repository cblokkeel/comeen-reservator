import { COMEEN_URL } from '~~/lib/constants';
import { PresenceDaysEnum, Reservation, User } from '~~/lib/types';
import { getComeenHeaders } from '~~/server/src/getComeenHeaders';

export const createReservation = async ({
  startDate,
  endDate,
  cookie,
  users,
}: Reservation) => {
  const teamPresenceDays: Set<PresenceDaysEnum> = new Set(
    users.flatMap((user) => user.presenceDays),
  );

  let loopDate = new Date(startDate);
  while (loopDate <= endDate) {
    const day = getPresenceDayEnumValueFromDay(loopDate.getDay());
    if (day && teamPresenceDays.has(day)) {
      users
        .filter((user) => user.presenceDays.includes(day))
        .forEach((user) => {
          reserveForADay(loopDate, user, cookie as string).then((result) => {
            if (!result) {
              throw new Error('Error while reserving');
            }
          });
        });
    }
    loopDate = new Date(loopDate.getDate() + 1);
  }
};

const getPresenceDayEnumValueFromDay = (day: number) => {
  switch (day) {
    case 1:
      return PresenceDaysEnum.MONDAY;
    case 2:
      return PresenceDaysEnum.TUESDAY;
    case 3:
      return PresenceDaysEnum.WEDNESDAY;
    case 4:
      return PresenceDaysEnum.THURSDAY;
    case 5:
      return PresenceDaysEnum.FRIDAY;
    default:
      return null;
  }
};

const reserveForADay = async (
  day: Date,
  user: User,
  cookie: string,
): Promise<boolean> => {
  try {
    await $fetch(COMEEN_URL, {
      method: 'POST',
      body: {
        presences: [
          {
            presence: {
              desk_id: user.deskId,
              person_id: user.userId,
              start_datetime: new Date(day.setHours(0, 0)).toISOString(),
              end_datetime: new Date(day.setHours(23, 59)).toISOString(),
            },
            desk_booking: {
              book: false,
              desk_id: user.deskId,
            },
          },
        ],
      },
      headers: getComeenHeaders(cookie),
    });

    return true;
  } catch (error: any) {
    return false;
  }
};
