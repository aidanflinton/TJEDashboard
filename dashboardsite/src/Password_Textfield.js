import "./App.css";
import TextField from '@mui/material/TextField';

function PasswordField() {
    return (
        <div>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
        </div>
    );
}

export default PasswordField;
