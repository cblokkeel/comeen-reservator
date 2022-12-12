import { Schema, model } from 'mongoose';

const schema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export default model('Team', schema);
