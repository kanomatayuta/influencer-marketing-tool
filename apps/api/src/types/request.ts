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

// Express Request を直接拡張
export interface AuthRequest extends Request {
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
}

export interface AuthenticatedRequest extends Request {
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
}

export interface RequestWithId extends Request {
  id?: string;
  requestId?: string;
  user?: any;
  file?: Express.Multer.File;
}
