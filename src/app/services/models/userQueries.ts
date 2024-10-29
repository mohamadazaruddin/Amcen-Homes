import mongoose from "mongoose";
const userQueriesSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: { type: String, required: [true, "Email is required"] },
  phone: { type: String, required: [true, "Phone Number is required"] },
  query: { type: String, required: [true, "Query is required"] },
  queryType: { type: String, required: [true, "Name is required"] },
  service: { type: String },
  estimatedCost: { type: String },
  constructionItems: { type: Array },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const UserQueries =
  mongoose.models.UserQueries ||
  mongoose.model("UserQueries", userQueriesSchema);

export default UserQueries;
