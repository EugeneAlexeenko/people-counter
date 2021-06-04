import { getMockReq, getMockRes } from '@jest-mock/express';
import { healthCheckController } from './healthCheckController';

describe('healthCheckController', () => {
  test('should return 200', async () => {
    const req = getMockReq();
    const { res } = getMockRes();

    healthCheckController(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'ok' });
  });
});
