import jwt from "jsonwebtoken";
import { CustomAPIError } from "../errors/custom-error.js";

const authenticationMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomAPIError("Token is not provided", 401);
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (error) {
        console.log(error);
        throw new CustomAPIError("not authorized to access this route", 401);
    }
};

export default authenticationMiddleware;