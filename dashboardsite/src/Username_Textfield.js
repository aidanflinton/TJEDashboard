import './App.css';
import TextField from '@mui/material/TextField'; 

function Field() {
    return (
        <div>
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <h2>Non textfield test</h2>
        </div>
    );
}

export default Field;