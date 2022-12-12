import { Schema, model } from 'mongoose';

const schema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
  },
  { timestamps: true },
);

export default model('Team', schema);
