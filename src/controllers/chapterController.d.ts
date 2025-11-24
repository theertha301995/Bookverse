import { Request, Response } from "express";
export declare const createChapter: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getChapters: (req: Request, res: Response) => Promise<void>;
export declare const getChapter: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateChapter: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteChapter: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const togglePublishChapter: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=chapterController.d.ts.map