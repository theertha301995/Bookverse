import { Request, Response } from "express";
export declare const addToLibrary: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeFromLibrary: (req: Request, res: Response) => Promise<void>;
export declare const checkLibraryStatus: (req: Request, res: Response) => Promise<void>;
export declare const getUserLibrary: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=libraryController.d.ts.map