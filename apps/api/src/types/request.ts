import { Request } from 'express';
import { JWTPayload } from '../utils/jwt';

// 交差型を使用してExpressのRequest型と互換性を保つ
export type AuthRequest = Request & {
  user?: JWTPayload;
  requestId?: string;
  file?: Express.Multer.File;
};

export type AuthenticatedRequest = Request & {
  user?: JWTPayload;
  requestId?: string;
  file?: Express.Multer.File;
};

export type RequestWithId = Request & {
  id?: string;
  requestId?: string;
};
