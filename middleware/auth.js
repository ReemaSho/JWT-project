import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/index.js";

const authenticationMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("Token is not provided");
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (error) {
        console.log(error);
        throw new UnauthorizedError("not authorized to access this route");
    }
};

export default authenticationMiddleware;