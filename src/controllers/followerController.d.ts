import { Request, Response } from "express";
export declare const followAuthor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const unfollowAuthor: (req: Request, res: Response) => Promise<void>;
export declare const isFollowing: (req: Request, res: Response) => Promise<void>;
export declare const getFollowingList: (req: Request, res: Response) => Promise<void>;
export declare const getFollowers: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=followerController.d.ts.map