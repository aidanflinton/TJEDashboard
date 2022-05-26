import "./App.css";
import TextField from '@mui/material/TextField';

function PasswordField() {
    return (
        <div>
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            />
        </div>
    );
}

export default PasswordField;
