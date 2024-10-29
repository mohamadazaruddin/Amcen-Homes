import mongoose from "mongoose";
const FaqSchema = new mongoose.Schema({
  Question: { type: String, required: [true, "Question is required"] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Faq = mongoose.models.questions || mongoose.model("questions", FaqSchema);

export default Faq;
