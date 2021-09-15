import { dbContext } from '../db/DbContext'
import { galaxyService } from '../services/GalaxyService'
import BaseController from '../utils/BaseController'

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxy')
    this.router
      .get('', this.getGalaxy)
      .post('', this.createGalaxy)
      .get('/:galaxyId', this.getGalaxyById)
      .put('/:galaxyId', this.editGalaxy)
      .delete('/:galaxyId', this.deleteGalaxy)
  }

  async getGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.getGalaxy(req.query)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyById(req, res, next) {
    try {
      const galaxy = await galaxyService.getGalaxyById(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async deleteGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.deleteGalaxy(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async editGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.editGalaxy(req.params.galaxyId, req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
