export class HealthController {
  getHello(req, res) {
    return res.status(200).json({
      status: 'ok',
      message: 'Hello from infrastucture',
    });
  }
}
