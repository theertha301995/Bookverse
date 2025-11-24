import type { Request, Response } from "express";
export declare const createReport: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllReports: (req: Request, res: Response) => Promise<void>;
export declare const handleReport: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=reportController.d.ts.map