import React from 'react';
import {useState, useEffect} from 'react';
import {TableContainer, Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material';

import {collection, getDocs} from 'firebase/firestore';
import db from './firebase';

const TeacherDirectory = () => {
    const [teachers, setTeachers] = useState([]); 
    useEffect(() => {
        const teacherList = []
        getDocs(collection(db, "teachers"))
        .then((allTeachers) => {
            allTeachers.forEach((teacher) => 
            teacherList.push({firstName:teacher.firstName, lastName:teacher.lastName, email:teacher.email, password:teacher.password, id:teacher.id, grade:teacher.grade,  ...teacher.data()
            }))
            return teacherList
        }).then(
            teacherList=>setTeachers(teacherList)
        )
  }, [])

    return (
    
    <TableContainer component={Paper}>
        <Table aria-label='Teacher Directory'>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    teachers.length>0
                    &&
                    teachers.map(row => (
                        <TableRow key={row.email}
                        sx={{'&:last-child td, &:last-childth':{border: 0}}}>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.grade}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>)
            
    
}

export default TeacherDirectory


    //const teachersList = [
    //     {
    //         email: 1,
    //         password: 123,
    //         firstName: "John",
    //         lastName: "Doe1",
    //         grade: "1",
    //         email: "1"
    //      },
    //     {
    //         email: 2,
    //         password: 123,
    //         firstName: "John",
    //         lastName: "Doe2",
    //         grade: "2",
    //         email: "2"
    //     },
    //     {
    //         email: 3,
    //         password: 123,
    //         firstName: "John",
    //         lastName: "Doe3",
    //         grade: "3",
    //         email: "3"
    //     },
    //     {
    //         email: 4,
    //         password: 123,
    //         firstName: "John",
    //         lastName: "Doe4",
    //         grade: "4",
    //         email: "4"
    //     }
    // ];