// isLoggedInMiddleware.ts
import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

declare global {
    namespace Express {
        interface Request {
            userId?: string; // Add any custom properties you need
            userType?: string;
        }
    }
}

export const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    console.log(token)
    if (!token) {
        return res.status(401).json({ error: "Missing token" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload;
        req.userId = decoded.userId;
        req.userType = decoded.userType
        next()
    } catch (error) {
        res.status(401).json({ error: 'Authentication failed: Invalid token' })
    }
}


export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
    const { code, message } = error;
    // Default Code
    const statusCode = code || 500;

    // Default Message
    const errorMessage = message || error.message;

    // Send response
    res.status(statusCode).json({ error: errorMessage });
}
