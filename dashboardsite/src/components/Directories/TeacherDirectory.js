import React from 'react' 
import {TableContainer, Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'

const TeacherDirectory = () => {

   


    const teachersList = [
        {
            email: 1,
            password: 123,
            firstName: "John",
            lastName: "Doe1",
            subject: "math"
         },
        {
            email: 2,
            password: 123,
            firstName: "John",
            lastName: "Doe2",
            subject: "histroy"
        },
        {
            email: 3,
            password: 123,
            firstName: "John",
            lastName: "Doe3",
            subject: "science"
        },
        {
            email: 4,
            password: 123,
            firstName: "John",
            lastName: "Doe4",
            subject: "english"
        }
    ];


    return <TableContainer component={Paper}>
        <Table aria-label='Teacher Directory'>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    teachersList.map(row => (
                        <TableRow key={row.email}
                        sx={{'&:last-child td, &:last-childth':{border: 0}}}>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.subject}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
            
    
}

export default TeacherDirectory