import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getStars)
      .get('/:starId', this.getStarById)
      .post('', this.createStar)
  }

  async getStars(req, res, next) {
    try {
      const stars = await starsService.getStars(req.body)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getStarById(req, res, next) {
    try {
      const star = await starsService.getStarById(req.params.starId)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
