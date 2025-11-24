import type { Request, Response, NextFunction } from "express";
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
/**
 * requireRole - middleware factory to restrict route to a role or roles
 * Usage: router.post('/some', authMiddleware, requireRole('author'))
 * Or: requireRole('admin', 'author')
 */
export declare const requireRole: (...roles: string[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authMiddleware.d.ts.map