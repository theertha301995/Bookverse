import { Request, Response } from "express";
export declare const addComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getComments: (req: Request, res: Response) => Promise<void>;
export declare const editComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const toggleLike: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=commentController.d.ts.map