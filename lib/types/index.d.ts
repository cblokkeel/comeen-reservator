export interface User {
  _id: string;
  name: string;
  userId: string;
  deskId: string;
  presenceDays: string[];
  team: string | null;
}

export interface Team {
  _id: string;
  name: string;
  members: string[];
}
