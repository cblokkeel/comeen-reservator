import { Nitro } from 'nitropack';
import mongoose from 'mongoose';

export default async (_nitroApp: Nitro) => {
  const { databaseUrl } = useRuntimeConfig();

  mongoose
    .connect(databaseUrl)
    .then(() => console.log('Connected to database'))
    .catch((error) => console.log(error));
};
