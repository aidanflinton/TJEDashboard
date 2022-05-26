import React from 'react';
import {useState, useEffect} from 'react';
import {TableContainer, Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material';

import {collection, getDocs} from 'firebase/firestore';
import db from './firebase';

const StudentDirectroy = () => {
    const [students, setStudents] = useState([]); 
    useEffect(() => {
        const studentList = []
        getDocs(collection(db, "students"))
        .then((allStudents) => {
            allStudents.forEach((student) => 
            studentList.push({firstName:student.firstName, lastName:student.lastName, email:student.email, birthday:student.birthday, id:student.studentId,  ...student.data()
            }))
            return studentList
        }).then(
            studentList=>setStudents(studentList)
        )
  }, [])

    return (
        
    <TableContainer component={Paper}>
        <Table aria-label='StudentDirectory'>
            <TableHead>
                <TableRow>
                    <TableCell align='center'>First Name</TableCell>
                    <TableCell align='center'>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    students.length>0
                    &&
                    students.map(row => (
                        <TableRow key={row.email}
                        sx={{'&:last-child td, &:last-childth':{border: 0}}}>
                            <TableCell align='center'>{row.firstName}</TableCell>
                            <TableCell align='center'>{row.lastName}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>)
            
    
}

export default StudentDirectroy

// const studentList1 = [
    //     {
    //         firstName: "Jack",
    //         lastName: "Student1",
    //         email: "1"
    //      },
    //     {
    //         firstName: "Jack",
    //         lastName: "Student2",
    //         email: "2"
    //     },
    //     {
    //         firstName: "Jack",
    //         lastName: "Student3",
    //         email: "3"
    //     },
    //     {

    //         firstName: "Jack",
    //         lastName: "Student4",
    //         email: "4"
    //     }
    // ];
