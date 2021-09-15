import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MoonSchema = new Schema(
  {
    name: { type: String, required: true },
    planetId: { type: mongoose.Schema.Types.ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// MoonSchema.virtual('creator', {
//   localField: 'creatorId',
//   foreignField: '_id',
//   ref: 'Account',
//   justOne: true
// })
