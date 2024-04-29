import React from 'react';
import { useState } from "react";
import "./studentlist.css";
import StudentCard from "./StudentCard";
import data from "./data/data.json";

const StudentList = () => {

    const [start, setStart] = useState("All");
    function startDate(classDate) {
        setStart(classDate);
    }
    let selectedStudents = data.filter((student) => {
        switch (start) {
            case "All":
                return student.cohort.cohortCode;
                break;
            case "Winter2026":
                return student.cohort.cohortCode == 'Winter2026';
                break;
            case "Fall2026":
                return student.cohort.cohortCode == 'Fall2026';
                break;
            case "Summer2026":
                return student.cohort.cohortCode == 'Summer2026';
                break;
            case "Spring2026":
                return student.cohort.cohortCode == 'Spring2026';
                break;

            case "Winter2025":
                return student.cohort.cohortCode == 'Winter2025';
                break;
            case "Fall2025":
                return student.cohort.cohortCode == 'Fall2025';
                break;
            case "Summer2025":
                return student.cohort.cohortCode == 'Summer2025';
                break;
            case "Spring2025":
                return student.cohort.cohortCode == 'Spring2025';
                break;
        }
    })


    return (
        <div className="container">

            <div className="cohort">
                <h3>Choose a class by Start Date</h3>

                <div className="cohortcontainer">
                    <button onClick={() => startDate("All")}><h4>All Students</h4></button>
                    <div className="seperator"></div>
                    <button onClick={() => startDate("Winter2026")}><h4> Winter 2026</h4></button>
                    <div className="seperator"></div>
                    <button onClick={() => startDate("Fall2026")}><h4> Fall 2026</h4></button>
                    <div className="seperator"></div>

                    <button onClick={() => startDate("Summer2026")}><h4> Summer 2026</h4></button>
                    <div className="seperator"></div>
                    <button onClick={() => startDate("Spring2026")}><h4> Spring 2026</h4></button>
                    <div className="seperator"></div>

                    <button onClick={() => startDate("Winter2025")}><h4> Winter 2025</h4></button>
                    <div className="seperator"></div>
                    <button onClick={() => startDate("Fall2025")}><h4> Fall 2025</h4></button>
                    <div className="seperator"></div>
                    <button onClick={() => startDate("Summer2025")}><h4> Summer 2025</h4></button>
                    <div className="seperator"></div>
                    <button onClick={() => startDate("Spring2025")}><h4> Spring 2025</h4></button>
                    <div className="seperator"></div>

                </div>
            </div>

            <div className="studentlist">
                <p>{start}</p>
                <p>Total Students: {selectedStudents.length}</p>

                {
                    selectedStudents.map((student) => {
                        return <StudentCard key={student.id} student={student} />
                    })
                }


            </div>
        </div>

    );
}

export default StudentList 