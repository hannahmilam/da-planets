import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy'
import { MoonSchema } from '../models/Moon'
import { StarSchema } from '../models/Star'
import { PlanetSchema } from '../models/Planet'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxy = mongoose.model('Galaxy', GalaxySchema);
 Star = mongoose.model('Star', StarSchema);
 Planet = mongoose.model('Planet', PlanetSchema);
  Moon = mongoose.model('Moon', MoonSchema);
}

export const dbContext = new DbContext()
