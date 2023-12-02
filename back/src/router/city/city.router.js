import {Router} from "express";
import { controllersDi } from '../../middleware/dependency-injection/controller-di.js';
import { responseHandler } from '../../common/response-handler.js';

const cityRouter = Router()

const userController = controllersDi.cityController

cityRouter.get("/",
  async (req, res, next) => {
    responseHandler(req,res,next, async (req, res, next) => {
      await userController.getCities(req, res, next)
    })
  })


cityRouter.get("/:id/forecast",   async (req, res, next) => {
  responseHandler(req,res,next, async (req, res, next) => {
    await userController.getForecastForACity(req, res, next)
  })
})


export {
  cityRouter
}