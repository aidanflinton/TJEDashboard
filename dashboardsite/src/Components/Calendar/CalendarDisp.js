import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { useState, useEffect, useRef } from "react";

function CalendarDisp(props) {
    function isAfterToday(date) {
        const today = new Date();
        today.setHours(23, 59, 59, 998);
        return date >= today;
    }

    if(isAfterToday(props.date))
    {return(
        <>
        <h1>
            {props.name} | {" "}
            {props.desc} | {" "}
            {props.date.toString().substring(0,21)}
        </h1>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem
            key='asdf'
            disablePadding
            >
            <ListItemText id={props.name} primary={props.name} />
          </ListItem>
        </List>
        </>
    );}
}

export default CalendarDisp;

//