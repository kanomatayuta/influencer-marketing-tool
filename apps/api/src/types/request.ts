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

// Express Request とカスタムプロパティを合成
// 明示的にすべてのプロパティを含む
export type AuthRequest = Request & {
  body: any;
  params: Record<string, any>;
  query: Record<string, any>;
  headers: Record<string, any>;
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
};

export type AuthenticatedRequest = Request & {
  body: any;
  params: Record<string, any>;
  query: Record<string, any>;
  headers: Record<string, any>;
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
};

export type RequestWithId = Request & {
  body: any;
  params: Record<string, any>;
  query: Record<string, any>;
  headers: Record<string, any>;
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
};
