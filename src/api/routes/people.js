import express from "express";
import peopleController from "../controllers/PeopleController";

const router = express.Router();
const { list, create, remove } = peopleController;

router
  .route("/")
  .get(list)
  .post(create);

router.route("/:id").delete(remove);

export default router;
