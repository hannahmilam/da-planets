import { moonsService } from '../services/MoonsService'
import BaseController from '../utils/BaseController'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moon')
    this.router
      .get('', this.getMoons)
      .get('/:moonId', this.getMoonById)
      .post('', this.createMoon)
      .put('/:moonId', this.editMoon)
      .delete('/:moonId', this.deleteMoon)
  }

  async getMoons(req, res, next) {
    try {
      const moon = await moonsService.getMoons(req.query)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async getMoonById(req, res, next) {
    try {
      const moon = await moonsService.getMoonById(req.params.planetId)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async createMoon(req, res, next) {
    try {
      const moon = await moonsService.createMoon(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async deleteMoon(req, res, next) {
    try {
      const moon = await moonsService.deleteMoon(req.params.moonId)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async editMoon(req, res, next) {
    try {
      const moon = await moonsService.editMoon(req.params.moonId, req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }
}
