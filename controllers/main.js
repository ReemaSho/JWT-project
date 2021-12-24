//logic:
// check username,password in post(login) request
// if exist create new JWT
//send back to front-end
// setup authentication so only the request with JWT can access dashboard
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { CustomAPIError } from "../errors/custom-error.js";

const login = async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new CustomAPIError("Please provide email and address", 400);
    }
    // normally id is provided by DB!
    const id = uuidv4();
    //keep payload small, better for user experience
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    res.status(200).json({ msg: "user created", token });
};

const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    return res.status(200).json({
        msg: `Hello, John Doe`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};

export { dashboard, login };