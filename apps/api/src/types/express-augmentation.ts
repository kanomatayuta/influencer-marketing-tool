import { Request } from 'express';

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

// シンプルな型定義
export interface AuthRequest extends Request {
  user?: any;
  requestId?: string;
  id?: string;
}

export interface AuthenticatedRequest extends Request {
  user?: any;
  requestId?: string;
  id?: string;
}

export interface RequestWithId extends Request {
  user?: any;
  requestId?: string;
  id?: string;
}

export {};
