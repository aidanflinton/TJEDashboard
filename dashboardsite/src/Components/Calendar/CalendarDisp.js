import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState, useEffect, useRef } from "react";

import db from '../../firebase.js';
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";

function CalendarDisp(props) {
    return(
    <>
        <h1>
          {props.name}
          {props.desc}
          {props.date.toString().substring(0,21)}
          asdf
          </h1>
    </>
    );
}

export default CalendarDisp;

//