import { Router } from "express";
import { createOperation } from "../controller/operation.controller.js";

const operationRoute = Router()

operationRoute.route("/operation").post(createOperation)

export default operationRoute