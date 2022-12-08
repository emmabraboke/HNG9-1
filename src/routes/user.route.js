import { getUser } from "../controller/user.controller.js";
import { Router } from "express";

const userRoute = Router()

userRoute.route("/user").get(getUser)

export default userRoute