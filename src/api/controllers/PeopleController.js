import People from "../models/people.model";

export class PeopleController {
  create = async (req, res, next) => {
    try {
      const people = new People(req.body);
      const saved = await people.save();
      res.status(201);
      res.json(saved.transform());
    } catch (error) {
      next(error);
    }
  };

  list = async (req, res, next) => {
    try {
      const people = await People.list(req.query);
      const transformPeople = people.map(person => person.transform());
      res.json(transformPeople);
    } catch (err) {
      next(err);
    }
  };

  remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const people = await People.remove({ _id: id });
      res.status(200);
      res.send();
    } catch (err) {
      next(err);
    }
  };
}

export default new PeopleController();
