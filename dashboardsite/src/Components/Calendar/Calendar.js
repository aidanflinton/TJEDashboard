import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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
        {events && events.map((event) => <CalendarDisp name={event.name} date={new Date(event.date.seconds * 1000 + event.date.nanoseconds/1000000)} desc={event.description}/>)}  
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