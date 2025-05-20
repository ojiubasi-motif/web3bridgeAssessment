import { createContext, useEffect, useState } from "react";
import { useSingleSchoolData } from "../components/school/services/Queries";

const GlobalStates = createContext({});

export const GlobalStatesProvider = ({ children }) => {
    const [navTitle, setTitle] = useState("");
    const [studentInview, setStudentinview] = useState({});
    const [schoolInview, setSchoolInview] = useState({
        "id": 123,
        "name": "Bright Breeds",
        "category": [
            "Nursery",
            "Primary",
            "Secondary"
        ],
        "address": "#23 Kano crescent, Wuse, Abuja",
        "classes": [],
        "arms": [],
        // "id": "bdd1"
    });

    const { data: schoolData, isPending, isError } = useSingleSchoolData(schoolInview?.id)

    useEffect(() => {
        if (schoolData?.data) {
            // console.log("the new sch to be viewd=>",schoolInview)
            setSchoolInview((prev) => ({ ...prev, ...schoolData?.data }))
        }
    }, [schoolData?.data])

    return (
        <GlobalStates.Provider
            value={{
                navTitle,
                setTitle,
                studentInview,
                setStudentinview,
                schoolInview,
                setSchoolInview
            }}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export default GlobalStates;