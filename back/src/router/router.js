import {Router} from "express";
import { cityRouter } from './city/city.router.js';

const mainRouter = Router()

mainRouter.use("/cities", cityRouter)

export {
  mainRouter
}