import type { Request, Response } from "express";
export declare const listNotifications: (req: Request, res: Response) => Promise<void>;
export declare const markRead: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const markAllRead: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=notificationController.d.ts.map