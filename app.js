import dotenv from "dotenv";
import express from "express";
import express_async_errors from "express-async-errors";
import routeNotFound from "./middleware/route-not-found.js";
import errorHandlerMiddleware from "./middleware/custom-error.js";
import mainRoute from "./routes/main.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use("/api/v1", mainRoute);
//middleware
app.use(routeNotFound);
app.use(errorHandlerMiddleware);

const Port = process.env.Port || 3000;

const start = () => {
    app.listen(Port, console.log(`app is listening on port ${Port}`));
};

start();