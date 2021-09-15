import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlanetsService {
  async getPlanets(query) {
    const planets = await dbContext.Planet.find(query)
    return planets
  }

  async getPlanetById(planetId) {
    const planet = await dbContext.Planet.findById(planetId)
    if (!planet) {
      throw new BadRequest('Invalid Planet Id')
    }
  }

  async createPlanet(planetData) {
    const planet = await dbContext.Planet.create(planetData)
    return planet
  }
}
export const planetsService = new PlanetsService()
