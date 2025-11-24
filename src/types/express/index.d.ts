// src/types/express/index.d.ts
import type { Document } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      // Minimal user shape — expand as needed
      user?: {
        _id: string | Document;
        id?: string;
        role?: string;
        username?: string;
        email?: string;
      } & Document;
    }
  }
}
