import React from 'react';
import "./studentcard.css";
import { useState, useRef, useEffect } from "react";
import data from "./data/data.json";



const StudentCard = ({ student }) => {
    // console.log(student);
    // console.log("Did this print");



    const [readMore, setReadMore] = useState(true);
    function setRead() {
        setReadMore(!readMore);
    }

    const [inputVal, setInputVal] = useState("");
    const [inputVal2, setInputVal2] = useState("");

    const [comment, SetComment] = useState(student.notes);

    const performResult = (e) => {
        e.preventDefault();

        let obj = {
            commenter: inputVal,
            comment: inputVal2
        };
        student.notes.push(obj);

        // SetComment(comment=> [...comment,obj]);
        SetComment([...student.notes]);


        //SetComment(c=> [...c]);

        //    student.notes.forEach((a)=> {
        //     console.log(a);
        //    })

        setInputVal("");
        setInputVal2("");
    }

    return (
        <div className="top">
            {readMore ? (
                <>
                    <div className="studentcard">
                        <img src={student.profilePhoto} />
                        <div className="pcontainer">
                            <p>{student.names.preferredName} {student.names.middleName} {student.names.surname}</p>
                            <p>{student.username}</p>
                            <p>{student.dob}</p>
                            <button onClick={setRead}>Show More...</button>
                        </div>
                    </div>
                </>)
                : (<>
                    <div className="studentcardlarge">
                        <div className="contact">
                            <img src={student.profilePhoto} />
                            <div className="pcontainer">

                                <p>{student.names.preferredName} {student.names.middleName} {student.names.surname}</p>
                                <p>{student.username}</p>
                                <p>{student.dob}</p>
                                <button onClick={setRead}>Show Less...</button>
                            </div>
                            <div className="track">
                                <p>{student.certifications.resume && student.certifications.linkedin  && student.certifications.github  
                                && student.certifications.mockInterview && student.codewars.current.total > 600
                                 ? "On Track to Graduate" 
                                : "Off Track"}
                                </p>
                            </div>


                        </div>
                        <div className="scorecontainer">
                            <div className="first">
                                <h4>Codewars:</h4>
                                <p>Current Total: {student.codewars.current.total}</p>
                                <p>Last Week: {student.codewars.current.lastWeek}</p>
                                <p>Goal: {student.codewars.goal.total}</p>
                                <p>Percent of Goal Achieved: {Math.floor(student.codewars.current.total / student.codewars.goal.total * 100)}%</p>
                            </div>


                            <div className="second">
                                <h4>Scores</h4>
                                <p>Assignments: {student.cohort.scores.assignments * 100} %</p>
                                <p>Projects: {student.cohort.scores.projects * 100} %</p>
                                <p>Assessments: {student.cohort.scores.assessments * 100} %</p>
                            </div>

                            <div className="third">
                                <h4>Certifications</h4>
                                <p>Assessments: {student.certifications.resume ? '\u2705' : '\u274C'} </p>
                                <p>Linkedln: {student.certifications.linkedin ? '\u2705' : '\u274C'} </p>
                                <p>Mock Interview: {student.certifications.mockIntervew ? '\u2705' : '\u274C'} </p>
                                <p>GitHub: {student.certifications.github ? '\u2705' : '\u274C'} </p>
                            </div>

                        </div>
                        <div className="formcontainerouter">
                            <form onSubmit={performResult}>
                                <p>1-on-1 Notes</p>
                                <div className="formcontainer">
                                    <label for="values">Commenter Name </label>
                                    <input id="values" name="values" type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} /> <br />
                                    <label for="values2">Comment </label>
                                    <input id="values2" name="values2" type="text" value={inputVal2} onChange={(e) => setInputVal2(e.target.value)} /> <br />
                                    <button type="submit">Add Note</button>
                                </div>
                            </form>
                            <div className="notecontainer">
                                <p># of comments: {comment.length}</p>
                                <ul>
                                    {comment.map((comment, index) => {
                                        return <li key={index}>{comment.commenter} says, "{comment.comment}"</li>
                                    })}
                                </ul>

                            </div>

                        </div>



                    </div>

                </>)}

        </div>
    );


}

export default StudentCard