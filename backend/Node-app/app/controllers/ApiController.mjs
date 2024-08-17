import HttpCode from '../../configs/httpCode.mjs';

export default class ApiController {
  static async index(req, res) {
    return res.status(HttpCode.HTTP_OK).json('ok');
  }

  static async login(req, res) {
    return res.status(HttpCode.HTTP_OK).json('oka');
  }
}
