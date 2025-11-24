import { Request, Response } from "express";
export declare const rateBook: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getBookRatings: (req: Request, res: Response) => Promise<void>;
export declare const getUserRating: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=ratingController.d.ts.map