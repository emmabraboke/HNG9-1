import { Router } from "express";
import operationRoute from "./operator.route.js";
import userRoute from "./user.route.js";

const indexRoute = Router()


indexRoute.use(userRoute)
indexRoute.use(operationRoute)

export default indexRoute