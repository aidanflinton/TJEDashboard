import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";
import {useState, useEffect} from "react"

function LoginResult(props) {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
        measurementId: "G-HBVQ6HRPRT"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const teacherList = []
        getDocs(collection(db, "teachers"))  // get the collection
        .then((allTeachers) => {  // format each response into an array as we want it
            allTeachers.forEach((teacher) => teacherList.push({ firstName: teacher.firstName, lastName:teacher.lastName, email:teacher.email, password:teacher.password, subject:teacher.subject, ...teacher.data() }))
            setTeachers(teacherList)
    })
  }, [db])

  console.log(teachers);

  return (
    <div className="App">
      {teachers.map((item) => <h1>{item}</h1>)}
    </div>
  );
}

export default LoginResult;