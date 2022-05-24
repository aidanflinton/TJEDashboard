import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState, useRef } from "react";

import LoginResult from './LoginResult.js'

function LoginPage() {
    const [usr, setUsr] = useState(null);
    const [pass, setPass] = useState(null);

    const textFieldRef1 = useRef();
    const textFieldRef2 = useRef();

    const handleClick = (param1, param2) => {
        setUsr(param1);
        setPass(param2);
    }

    return(
    <>
        <Stack spacing={2}>
            <TextField id="username" label="Username" type="search"  inputRef={textFieldRef1} size="small"/>
            <TextField id="password" label="Password" type="search"  inputRef={textFieldRef2} size="small"/>
            <Button variant="contained" size="medium" onClick={() => handleClick(textFieldRef1.current.value, textFieldRef2.current.value)}>Submit</Button>
        </Stack>
        {usr && pass && <LoginPage user={usr} password={pass} />}
    </>
    );
}

export default LoginPage;