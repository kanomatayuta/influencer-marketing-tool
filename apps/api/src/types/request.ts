import { Request } from 'express';
import { JWTPayload } from '../utils/jwt';

// Express Request の任意のプロパティにアクセス可能にする
export interface AuthRequest extends Request<any, any, any, any> {
  user?: JWTPayload;
  requestId?: string;
  file?: Express.Multer.File;
}

export interface AuthenticatedRequest extends Request<any, any, any, any> {
  user?: JWTPayload;
  requestId?: string;
  file?: Express.Multer.File;
}

export interface RequestWithId extends Request<any, any, any, any> {
  id?: string;
  requestId?: string;
}
