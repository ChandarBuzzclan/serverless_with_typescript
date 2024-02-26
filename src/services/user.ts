import { Request, Response } from 'express';
async function userInfo(req: Request, res: Response) {
  return res.json({ success: true, message: 'user info from user services' });
}

export { userInfo };
