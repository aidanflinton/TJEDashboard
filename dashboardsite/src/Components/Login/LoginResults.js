import * as React from "react";
import { useState, useEffect} from "react";
import LoginOutput from "./LoginOutput.js";

import db from '../../firebase.js';
import { collection, getDocs } from "firebase/firestore";


function LoginResults(props) {
    const [teachers, setTeachers] = useState([]);
    const [teacherId, setTeacherId] = useState(0);

    useEffect(() => {
        const teacherList = []
        getDocs(collection(db, "teachers"))
        .then((allTeachers) => {
            allTeachers.forEach((teacher) => 
            teacherList.push({firstName:teacher.firstName, lastName:teacher.lastName, email:teacher.email, password:teacher.password, id:teacher.id, ...teacher.data()
            }))
        })
        .then(
            console.log(teacherList),
            setTeachers(teacherList),
            teachers.forEach((teacher) => {
            if(teacher.email === props.user && teacher.password === props.pass){
                setTeacherId(teacher.id);
            }
            console.log(teacherId); 
        }))
  }, [])
  
    return(
        <>
            <LoginOutput teacherId={teacherId}/>
        </>
    );
}
export default LoginResults;
