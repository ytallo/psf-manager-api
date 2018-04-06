import mongoose from "mongoose";
import { omitBy, isNil } from "lodash";

const { Schema } = mongoose;

const PeopleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  cardNumber: {
    type: String,
    required: true,
    trim: true
  },
  medicalRecords: {
    type: String,
    required: true,
    trim: true
  },
  isMale: {
    type: Boolean,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

PeopleSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "id",
      "name",
      "cardNumber",
      "medicalRecords",
      "isMale",
      "birthDate",
      "phone",
      "address"
    ];

    fields.forEach(field => {
      transformed[field] = this[field];
    });

    return transformed;
  }
});

PeopleSchema.statics = {
  async list({
    page = 1,
    pageSize = 30,
    name,
    cardNumber,
    medicalRecords,
    address
  }) {
    const options = omitBy(
      { name, cardNumber, medicalRecords, address },
      isNil
    );

    const list = await this.find(options)
      .skip(pageSize * (page - 1))
      .limit(Number(pageSize))
      .exec();

    console.log(list);
    return list;
  }
};

const People = mongoose.model("People", PeopleSchema);

export default People;
