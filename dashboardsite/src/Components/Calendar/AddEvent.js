import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from "react";

import db from '../../firebase.js';
import {collection, addDoc, Timestamp  } from "firebase/firestore";

import Grid from '@mui/material/Grid';

const AddEvent = () => {
    const addEvent = (e) => {
        e.preventDefault();  // no reloading the page

        const newEvent = {
            name: formValues.name,
            date: Timestamp.fromDate(new Date(formValues.date)),
            description: formValues.desc
        }
        
        addDoc(collection(db, "events"), newEvent) // add the new response 

        .catch((e) => console.error(e))
    }

    const defaultValues = {
        name: "",
        date: "",
        desc: ""
    };

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    addEvent(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <TextField
            id="date-input"
            name="date"
            label="Date (YYYY-MM-DD)"
            type="text"
            value={formValues.date}
            onChange={handleInputChange}
          />
          <TextField
            id="desc-input"
            name="desc"
            label="Description"
            type="text"
            value={formValues.desc}
            onChange={handleInputChange}
          />
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Add Event
        </Button>
      </Grid>
    </form>
  );
};

export default AddEvent;