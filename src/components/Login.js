import React, { useState } from "react";
import "../App.css";

//imported components
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkOut, setCheckOut] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  //calling history to enable redirect function
  const history = useHistory();

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function handleCheckOut(event) {
    setCheckOut(event.target.value);
    setCheckOut(true);
  }

  function handleLogin(event) {
    event.preventDefault();
    //using history and path to let the onCLick on Button redirect to a specified page
    let path = `datahouse`;

    //now the condition
    if (email === "kojoasumani@hotmail.com" && password === "12345_6!" && checkOut === true) {
      setLoggedIn(true);

      // add timeout effect
      window.setTimeout(() => {
        history.push(path);
        // history is available by design in this.props when using react-router and class components
      }, 3000); // 3000 means 3 seconds
    }
  }

  return (
    <div className="login-page">
      <NavBar loggedIn={loggedIn} />
      <center>
        <Form style={{ width: "50%" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailInput} />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordInput}
            />

            <br />

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" value={checkOut} onChange={handleCheckOut} />
            </Form.Group>
          </Form.Group>

          <Button className="buttonload" variant="primary" type="submit" onClick={handleLogin}>
            {loggedIn === true ? (
              <span>
                <i className="fa fa-spinner fa-spin"></i>Signed In | Redirecting ...
              </span>
            ) : (
              <span>Sign Up</span>
            )}
          </Button>
        </Form>
        <br />
        {/* adding another render to the loggedIn true state */}
        {loggedIn === true ? (
          <p>Thank You! You've been signed in successfully. Let's check what the weather looks like today.</p>
        ) : null}
      </center>
    </div>
  );
}

export default Login;
