import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarsService {
  async getStars(query) {
    const stars = await dbContext.Star.find(query)
    return stars
  }

  async getStarById(starId) {
    const star = await dbContext.Star.findById(starId)
    if (!star) {
      throw new BadRequest('Invalid Star Id')
    }
    return star
  }

  async createStar(starData) {
    const star = await dbContext.Star.create(starData)
    return star
  }
}
export const starsService = new StarsService()
