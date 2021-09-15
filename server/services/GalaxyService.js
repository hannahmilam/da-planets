import { query } from 'express'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxyService {
  async getGalaxy(query) {
    const galaxy = await dbContext.Galaxy.find(query)
    return galaxy
  }

  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxy.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('Invalid Galaxy Id')
    }
    return galaxy
  }

  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }

  async deleteGalaxy(galaxyId) {
    const galaxy = await this.getGalaxyById(galaxyId)
    await galaxy.remove()
    return galaxy
  }

  async editGalaxy(galaxyId, galaxyData) {
    const galaxy = await this.getGalaxyById(galaxyId)
    galaxy.name = galaxyData.name || galaxy.name
    // galaxy._id = galaxyData._id || galaxy._id

    await galaxy.save()
    return galaxy
  }
}
export const galaxyService = new GalaxyService()
