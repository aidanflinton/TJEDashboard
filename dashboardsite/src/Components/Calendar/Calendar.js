import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState, useEffect, useRef } from "react";

import db from '../../firebase.js';
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";

import CalendarDisp from './CalendarDisp.js';
import AddEvent from './AddEvent.js';

function Calendar() {
    const [events, setEvents] = useState([]);
    const [btn, setBtn] = useState(false);

    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    const [desc, setDesc] = useState(null);
    const textFieldRef1 = useRef();
    const textFieldRef2 = useRef();
    const textFieldRef3 = useRef();
    const handleClick = (param1, param2, param3) => {
        setName(param1);
        setDate(param2);
        setDesc(param3)
    }

    useEffect(() => {
        const eventList = []
        getDocs(collection(db, "events"))
        .then((allEvents) =>  {
            allEvents.forEach((event) => 
            eventList.push({name:event.name, date:event.date, description:event.description, ...event.data()
            }))
        },
            console.log(eventList),
            eventList.sort((a, b) =>  (a.date.toMillis() < b.date.toMillis()) ? 1 : -1),
            console.log(eventList),
            setEvents(eventList),
            
        )
    }, [])

    console.log(events);

    return(
    <>
        <Button variant="contained" size="large" onClick={() => setBtn(true)}>Load Calendar</Button>
        {btn && events.map((event) => <CalendarDisp name={event.name} date={new Date(event.date.seconds * 1000 + event.date.nanoseconds/1000000)} desc={event.description}/>)}
        <Stack spacing={2}>
            <TextField id="eventName" label="Event Name" type="search"  inputRef={textFieldRef1} size="small"/>
            <TextField id="eventDate" label="Event Date" type="search"  helperText="YYYY/MM/DD" inputRef={textFieldRef2} size="small"/>
            <TextField id="eventDesc" label="Event Description" type="search"  inputRef={textFieldRef3} size="small"/>
            <Button variant="contained" size="medium" onClick={() => handleClick(textFieldRef1.current.value, textFieldRef2.current.value, textFieldRef3.current.value)}>Add New Event</Button>
        </Stack>  
        {name && date && desc && <AddEvent name={name} date={date} desc={desc}/>}
    </>
    );
}

export default Calendar;


/*
eventList.sort((a, b) => b.date.seconds - a.date.seconds),

*/