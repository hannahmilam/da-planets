import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MoonsService {
  async getMoons(query) {
    const moons = await dbContext.Moon.find(query)
    return moons
  }

  async getMoonById(moonId) {
    const moon = await dbContext.Moon.findById(moonId)
    if (!moon) {
      throw new BadRequest('Invalid Moon Id')
    }
    return moon
  }

  async createMoon(moonData) {
    const moon = await dbContext.Moon.create(moonData)
    return moon
  }

  async deleteMoon(moonId) {
    const moon = await this.getMoonById(moonId)
    await moon.remove()
    return moon
  }

  async editMoon(moonId, moonData) {
    const moon = await this.getMoonById(moonId)

    moon.name = moonData.name || moon.name
    moon.planetId = moonData.planetId || moon.planetId

    await moon.save()
    return moon
  }
}
export const moonsService = new MoonsService()
