import mongoose from "mongoose";

const ScoresSchema = new mongoose.Schema(
  {
    record_id: { type: String, required: true },
    student_id: { type: String, required: true },

    score:{ type: Number, default: 0, required:true },
    
    cummulative:{ type: Number, default: 0},

  },
  { timestamps: true }
);

export default mongoose.models.Scores || mongoose.model("Scores", ScoresSchema);
