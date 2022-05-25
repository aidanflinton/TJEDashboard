import React from 'react' 
import {TableContainer, Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'

import {collection, getDocs} from 'firebase/firestore'
import db from './firebase'



const StudentDirectroy = () => {

    getDocs(collection(db, "students")).then((allDocs) => {allDocs.forEach((doc) => console.log(doc.data()))})



    const studentList = [
        {
            firstName: "Jack",
            lastName: "Student1",
            year: "4th Year"
         },
        {
            firstName: "Jack",
            lastName: "Student2",
            year: "3rd Year"
        },
        {
            firstName: "Jack",
            lastName: "Student3",
            year: "2nd Year"
        },
        {

            firstName: "Jack",
            lastName: "Student4",
            year: "1st Year"
        }
    ];


    return <TableContainer component={Paper}>
        <Table aria-label='StudentDirectory'>
            <TableHead>
                <TableRow>
                    <TableCell align='center'>First Name</TableCell>
                    <TableCell align='center'>Last Name</TableCell>
                    <TableCell align='center'>Year</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    studentList.map(row => (
                        <TableRow key={row.email}
                        sx={{'&:last-child td, &:last-childth':{border: 0}}}>
                            <TableCell align='center'>{row.firstName}</TableCell>
                            <TableCell align='center'>{row.lastName}</TableCell>
                            <TableCell align='center'>{row.year}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
            
    
}

export default StudentDirectroy