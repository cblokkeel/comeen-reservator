export enum PresenceDaysEnum {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
}

export interface User {
  _id: string;
  name: string;
  userId: string;
  deskId: string;
  presenceDays: PresenceDaysEnum[];
  team: string | null;
}

export interface Team {
  _id: string;
  name: string;
  members: string[];
}

export interface Reservation {
  startDate: Date;
  endDate: Date;
  cookie: String;
  users: User[];
}
