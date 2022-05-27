import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {TableContainer, Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material';
import { useState, useEffect}  from "react";

import db from '../../firebase.js';
import { collection, getDocs } from "firebase/firestore";

import CalendarDisp from './CalendarDisp.js';

import AddEvent from './AddEvent.js'

function Calendar() {
    const [events, setEvents] = useState();
    const [btn, setBtn] = useState(false);

    useEffect(() => {
        const eventList = []
        getDocs(collection(db, "events"))
        .then((allEvents) =>  {
            allEvents.forEach((event) => 
            eventList.push({name:event.name, date:event.date, description:event.description, ...event.data()
            }))
            return eventList;
        })
        .then(
            eventList => setEvents(eventList)
        )
    }, [])


    console.log(events);

    return(
    <div>
    <TableContainer component={Paper}>
        <Table aria-label='Teacher Directory'>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontSize: "2rem"}}>Event Name</TableCell>
                    <TableCell sx={{fontSize: "2rem"}}>Date</TableCell>
                    <TableCell sx={{fontSize: "2rem"}}>Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
        {events && events.map((event) => <CalendarDisp name={event.name} date={new Date(event.date.seconds * 1000 + event.date.nanoseconds/1000000)} desc={event.description}/>)} 
        </TableBody>
                </Table>
    </TableContainer> 
        <AddEvent />

    </div>
    );
}

export default Calendar;

/*
            console.log(eventList),
            eventList.sort((a, b) =>  (a.date.seconds > b.date.seconds) ? 1 : -1),
            console.log(eventList),
            */