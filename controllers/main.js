//logic:
// check username,password in post(login) request
// if exist create new JWT
//send back to front-end
// setup authentication so only the request with JWT can access dashboard
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const login = async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new BadRequestError("Please provide email and address");
    }
    // normally id is provided by DB!
    const id = uuidv4();
    //keep payload small, better for user experience
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    res.status(StatusCodes.OK).json({ msg: "user created", token });
};

const dashboard = async(req, res) => {
    const user = req.user.username;
    const username = user.charAt(0).toUpperCase() + user.slice(1);
    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(StatusCodes.OK).json({
        msg: `Hello, ${username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};

export { dashboard, login };