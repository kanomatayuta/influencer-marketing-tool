import { Request } from 'express';
import { JWTPayload } from '../utils/jwt';

// Express Request の任意のプロパティにアクセス可能にする
export interface AuthRequest extends Request {
  user?: JWTPayload;
  requestId?: string;
  file?: Express.Multer.File;
  [key: string]: any;
}

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
  requestId?: string;
  file?: Express.Multer.File;
  [key: string]: any;
}

export interface RequestWithId extends Request {
  id?: string;
  requestId?: string;
  [key: string]: any;
}
