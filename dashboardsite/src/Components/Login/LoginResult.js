import db from '../../firebase.js';
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";
import {useState, useEffect} from "react"

function LoginResult(props) {
    

    const [teachers, setTeachers] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const teacherList = []
        getDocs(collection(db, "teachers"))
        .then((allTeachers) => {
            allTeachers.forEach((teacher) => 
            teacherList.push({firstName:teacher.firstName, lastName:teacher.lastName, email:teacher.email, password:teacher.password, ...teacher.data()

            })
            , console.log(teacherList)
            )
            setTeachers(teacherList)
    })
  }, [])

  console.log(teachers);
  teachers.forEach((teacher) => {
          if(teacher.email === props.user && teacher.password === props.password){
            setLoggedIn(true);
          }
    })


if(loggedIn){
  return (
    <div className="App">
        You successfully logged in
    </div>
  );
}
else{
    return (
    <div className="App">
        Your user name or password was wrong, please try again
    </div>
  );
}
}

export default LoginResult;


/*

*/