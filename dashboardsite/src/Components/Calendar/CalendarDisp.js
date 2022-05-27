import {TableContainer, Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material';

function CalendarDisp(props) {
    function isAfterToday(date) {
        const today = new Date();
        today.setHours(23, 59, 59, 998);
        return date >= today;
    }

    if(isAfterToday(props.date))
    {return(
        <>

                        <TableRow key={props.name}
                        sx={{fontSize: "2.25rem", '&:last-child td, &:last-childth':{border: 0}}}>
                            <TableCell sx={{fontSize: "1.7rem"}}>{props.name}</TableCell>
                            <TableCell sx={{fontSize: "1.7rem"}}>{props.date.toString().substring(0,21)}</TableCell>
                            <TableCell sx={{fontSize: "1.7rem"}}>{props.desc}</TableCell>
                        </TableRow>

        </>
    );}
}

export default CalendarDisp;

//