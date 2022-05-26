import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState, useEffect, useRef } from "react";

import db from '../../firebase.js';
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment, Timestamp  } from "firebase/firestore";

import CalendarDisp from './CalendarDisp.js';

function Calendar() {
    const [events, setEvents] = useState([]);
    const [btn, setBtn] = useState(false);
    const textFieldRef1 = useRef();
    const textFieldRef2 = useRef();
    const textFieldRef3 = useRef();

    useEffect(() => {
        const eventList = []
        getDocs(collection(db, "events"))
        .then((allEvents) =>  {
            allEvents.forEach((event) => 
            eventList.push({name:event.name, date:event.date, description:event.description, ...event.data()
            }))
        },
            console.log(eventList),
            eventList.sort((a, b) =>  (a.date.seconds > b.date.seconds) ? 1 : -1),
            console.log(eventList),
            setEvents(eventList),
        )
    }, [])

    const addEvent = (e) => {
    e.preventDefault();  // no reloading the page

    const newEvent = {
        responseText: textFieldRef1.current.value,
        date: Timestamp.fromDate(new Date(textFieldRef2.current.value)),
        description: textFieldRef3.current.value
    }
    addDoc(collection(db, "events"), newEvent) // add the new response 
    .then((docRef) => {
      setEvents([...events, {name: docRef.name, ...newEvent}])  // update the state variable
    })
    .catch((e) => console.error(e))

    textFieldRef1.current.value = "" 
    textFieldRef2.current.value = ""
    textFieldRef3.current.value = ""
  }

    console.log(events);

    return(
    <>
        <Button variant="contained" size="large" onClick={() => setBtn(true)}>Load Calendar</Button>
        {btn && events.map((event) => <CalendarDisp name={event.name} date={new Date(event.date.seconds * 1000 + event.date.nanoseconds/1000000)} desc={event.description}/>)}
        <Stack spacing={2}>
            <TextField id="eventName" label="Event Name" type="search"  inputRef={textFieldRef1} size="small"/>
            <TextField id="eventDate" label="Event Date" type="search"  helperText="YYYY/MM/DD" inputRef={textFieldRef2} size="small"/>
            <TextField id="eventDesc" label="Event Description" type="search"  inputRef={textFieldRef3} size="small"/>
        </Stack>  
        <form onSubmit={addEvent} >
            <input type="text" ref={textFieldRef1} />
            <input type="text" ref={textFieldRef2} />
            <input type="text" ref={textFieldRef3} />
            <input type="submit" />
        </form>
    </>
    );
}

export default Calendar;


/*
eventList.sort((a, b) => b.date.seconds - a.date.seconds),
<Button variant="contained" size="medium" onClick={() => handleClick(textFieldRef1.current.value, textFieldRef2.current.value, textFieldRef3.current.value)}>Add New Event</Button>
*/