import express from "express";
import peopleController from "../controllers/PeopleController";

const router = express.Router();

router
  .route("/")
  .get(peopleController.list)
  .post(peopleController.create);

export default router;
