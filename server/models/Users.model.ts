import { Schema, model } from 'mongoose';

const schema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    deskId: {
      type: String,
      required: true,
    },
    presenceDays: {
      type: [String],
      enum: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
      required: true,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
  },
  { timestamps: true },
);

export default model('User', schema);
