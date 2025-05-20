
import Questions from "../models/Questions.js";
import express from "express";


const router = express.Router();
// fetch all grades in a school
// router.get("/questions/:question_id", async (req, res) => {
//   const { question_id } = req.params;
//   try {
//     const allGrades = await Grades.find({ school_id }).select(
//       "-createdAt -updatedAt"
//     );
//     res.status(200).json({ msg: allGrades, type: "SUCCESS", code: 600 });
//   } catch (error) {
//     res.status(500).json({ msg: error, type: "FAILED", code: 601 });
//   }
// });




export default router;