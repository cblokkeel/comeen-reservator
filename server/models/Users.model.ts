import { Schema, model } from 'mongoose';

const schema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desk: {
      type: String,
      required: true,
    },
    prsencesDays: {
      type: [String],
      enum: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
      required: true,
    },
  },
  { timestamps: true },
);

export default model('User', schema);