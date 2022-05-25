import * as React from "react";
import { useState, useEffect, useRef } from "react";
import LoginOutput from "./LoginOutput.js";

import db from '../../firebase.js';
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";


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
/*
:
        <div className="App">
            <>Your username or password is incorrect, refresh the page and try again</>
        </div>

const [teachers, setTeachers] = useState([]);
    const [teacherId, setId] = useState(0);

    const fillTeachers = (allTeachers, teacherList) => {
            allTeachers.forEach((teacher) => 
                teacherList.push({firstName:teacher.firstName, lastName:teacher.lastName, email:teacher.email, password:teacher.password, id:teacher.id, ...teacher.data()

                })
                , console.log(teacherList))
                setTeachers(teacherList)
    }

    useEffect(() => {
        const teacherList = []
        getDocs(collection(db, "teachers"))
            .then((allTeachers) => {
                fillTeachers(allTeachers, teacherList);
            })
        .then(teachers.forEach((teacher) => {
            if(teacher.email === usr && teacher.password === pass){
            setId(teacher.id);
            console.log(teacherId);
            }
        }))
    }, [])

    */