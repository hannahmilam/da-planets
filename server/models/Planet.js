import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true },
    starId: { type: mongoose.Schema.Types.ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// PlanetSchema.virtual('creator', {
//   localField: 'creatorId',
//   foreignField: '_id',
//   ref: 'Account',
//   justOne: true
// })
