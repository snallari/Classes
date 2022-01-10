import React, { useState } from "react";
import { Button, TextField, FormGroup, Box } from "@material-ui/core";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState({ userName: "" });
  const [password, setPassword] = useState({ password: "" });
  const [email, setEmail] = useState({ email: "" });

  const getuserName = (event) => {
    console.log(event.target.value);
    setUserName({
      userName: event.target.value,
    });
  };

  const getpassword = (event) => {
    console.log(event.target.value);
    setPassword({
      password: event.target.value,
    });
  };

  const getemail = (event) => {
    console.log(event.target.value);
    setEmail({
      email: event.target.value,
    });
  };

  const handleSignUp = () => {
    let url = "http://localhost:8081/user/signup";
    let data = {
      userName: userName.userName,
      email: email.email,
      password: password.password,
    };
    console.log(data);
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {});
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <FormGroup>
        <TextField
          id="outlined-helperText"
          label="UserName"
          defaultValue="Login"
          onChange={getuserName}
          helperText="Some important text"
        />
        <TextField
          id="outlined-helperText"
          label="Email"
          defaultValue="Login"
          onChange={getemail}
          helperText="Some important text"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Password"
          onChange={getpassword}
          helperText="Some important text"
        />

        <Button variant="outlined" onClick={handleSignUp}>
          SignUp
        </Button>
      </FormGroup>
    </Box>
  );
}

export default Login;