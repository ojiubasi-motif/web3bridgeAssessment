import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/layout/Home";
import MissingPage from "./components/pages/MissingPage";





function App() {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} /> */}

        <Route path="/" element={<Home/>} >
          <Route path="" element={<Unauthorized/>}/>
          <Route index element={<Dashboard/>} />
          <Route path="attendance" element={<Attendance/>} />
          <Route path="scores" element={<ScoresView/>} />
          <Route path="students" element={<Allstudents/>} />
          {/* <Route path="schools" element={<ALLSchools/>} /> */}
          <Route path="schools/:sch_id" element={<School/>}>
            <Route index element={<Classes/>}/>
            <Route path="staff" element={<Staff/>}/>
            <Route path="sessions" element={<Sessions/>}/>
            <Route path="terms" element={<Terms/>}/>
            <Route path="subjects" element={<Subjects/>}/>
          </Route>
          <Route path="createscores" element={<CreateScores/>} />

        </Route>

        <Route path="*" element={<MissingPage/>} />
      </Routes>
    </>
  );
}

export default App;