import { config } from "dotenv";
import express from "express";
import express_async_errors from "express-async-errors";
import routeNotFound from "./middleware/route-not-found.js";
const app = express();
const db_URI = config();
app.use(express.json());

//middleware
app.use(routeNotFound);

const Port = process.env.Port || 3000;

const start = () => {
    app.listen(Port, console.log(`app is listening on port ${Port}`));
};

start();