import mongoose from "mongoose";

const QuestionsSchema = new mongoose.Schema(
  {
    question_id: { type: String, required: true },
    question: { type: String, required: true },
    options_details: [{details:{ type: String, required: true }, options:{ type: String, default: "F", enum:["A","B","C","D","E","F"] }}],
    correct_answer:{ type: String, required: true },
    // cummulative:{ type: Number, default: 0},
  },
  { timestamps: true }
);

export default mongoose.models.Questions || mongoose.model("Questions", QuestionsSchema);
