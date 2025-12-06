import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

// Express Request のグローバル拡張
declare global {
  namespace Express {
    interface Request {
      user?: any;
      requestId?: string;
      file?: Express.Multer.File;
      id?: string;
    }
  }
}

// 完全に型指定されたRequest型を使用
export interface AuthRequest extends Request<ParamsDictionary, any, any, Record<string, any>> {
  body: any;
  params: Record<string, any>;
  query: Record<string, any>;
  headers: Record<string, any>;
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
}

export interface AuthenticatedRequest extends Request<ParamsDictionary, any, any, Record<string, any>> {
  body: any;
  params: Record<string, any>;
  query: Record<string, any>;
  headers: Record<string, any>;
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
}

export interface RequestWithId extends Request<ParamsDictionary, any, any, Record<string, any>> {
  body: any;
  params: Record<string, any>;
  query: Record<string, any>;
  headers: Record<string, any>;
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
}
