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

// カスタムプロパティを定義するためのベースインターフェース
export interface CustomRequestProperties {
  user?: any;
  requestId?: string;
  id?: string;
  file?: Express.Multer.File;
}

// Express Request とカスタムプロパティを合成
export type AuthRequest = Request & CustomRequestProperties;
export type AuthenticatedRequest = Request & CustomRequestProperties;
export type RequestWithId = Request & CustomRequestProperties;
