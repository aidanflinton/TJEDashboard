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
        let teacherSubId = 0;
        getDocs(collection(db, "teachers"))
        .then((allTeachers) => {
            allTeachers.forEach((teacher) => 
            teacherList.push({firstName:teacher.firstName, lastName:teacher.lastName, email:teacher.email, password:teacher.password, id:teacher.id, ...teacher.data()
            }));
            console.log(teacherList);
            setTeachers(teacherList);
            const email = props.user;
            const pass = props.pass;
            // let count = 0;
            // let count1 = 0;
            teacherList.forEach((teacher) => {
                if(teacher.email == email && teacher.password == pass){
                    teacherSubId = teacher.id;
                    // count1++;
                }
                // count++;
            })
            // console.log(count);
            // console.log(count1);
            // console.log(teacherSubId); 
            setTeacherId(teacherSubId);
            console.log(teacherId);
        })
        
    }, []);
  
    return(
        <>
            {/* {LoginOutput(teacherId)} */}
            <LoginOutput teacherId={teacherId}/>
        </>
    );
}
export default LoginResults;
