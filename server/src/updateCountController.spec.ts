import { getMockReq, getMockRes } from '@jest-mock/express';
import { updateCountController } from './updateCountController';
import { UpdateActions, UpdateCountDto } from './types';

// todo: use mocked db and event emitter

describe('updateCountController', () => {
  it('should return 200', async () => {
    const updateCountDto: UpdateCountDto = {
      roomName: 'room1',
      action: UpdateActions.INCREMENT,
      count: 5
    };
    const req = getMockReq({
      body: updateCountDto
    });
    const { res } = getMockRes();

    updateCountController(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Updated' });
  });

  it.todo('works properly with INCREMENT action');
  it.todo('works properly with DECREMENT action');
});
