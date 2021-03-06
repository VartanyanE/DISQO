import mongoose from "mongoose";

// we build our schema
const crudSchema = mongoose.Schema({
  notepadTitle: "String",
  noteTitle: "String",
  note: "String",
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
// turn our schema into a model
const crudModel = mongoose.model("Crud", crudSchema);
// export our model to our controller
export default crudModel;
