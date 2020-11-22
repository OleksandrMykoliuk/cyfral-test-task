import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import './RegistrationForm.scss';
import PropTypes from 'prop-types';

export const RegistrationForm = ({
  newLogin,
  newPassword,
  setIsLogined,
  setNeedRegistration,
  setCurrentUser,
}) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState(newLogin);
  const [password, setPassword] = useState(newPassword);
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [error, setError] = useState('');
  const [seePassword, setSeePassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name
      && position
      && phone
      && password
      && confirmedPassword
      && password === confirmedPassword) {
      const user = {
        userName: name,
        userPosition: position,
        userPhone: phone,
        userPassword: password,
      };

      event.preventDefault();
      localStorage.setItem(login, JSON.stringify(user));
      setIsLogined(true);
      setNeedRegistration(false);
      setCurrentUser(login);
    }

    setError('Please, fill every field or check confirmed password!');
  };

  return (
    <div className="RegistrationForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="RegistrationForm.login">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Login"
            value={login}
            onChange={(event) => {
              setLogin(event.target.value);
              setError('');
            }}
          />
        </Form.Group>
        <Form.Group controlId="RegistrationForm.password">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type={
                seePassword ? 'text' : 'password'
              }
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError('');
              }}
              placeholder="Password"
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                type="button"
                value={password}
                onClick={() => {
                  setSeePassword(!seePassword);
                }}
              >
                {
                  seePassword ? 'Hide' : 'Show'
                }
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="RegistrationForm.confirmpassword">
          <Form.Label>Confirm password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type={
                seePassword ? 'text' : 'password'
              }
              placeholder="Confirm password"
              value={confirmedPassword}
              onChange={(event) => {
                setConfirmedPassword(event.target.value);
                setError('');
              }}
              autofocus
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                type="button"
                value={password}
                onClick={() => {
                  setSeePassword(!seePassword);
                }}
              >
                {
                  seePassword ? 'Hide' : 'Show'
                }
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="RegistrationForm.position">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Smith"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setError('');
            }}
          />
        </Form.Group>
        <Form.Group controlId="RegistrationForm.position">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Developer"
            value={position}
            onChange={(event) => {
              setPosition(event.target.value);
              setError('');
            }}
          />
        </Form.Group>
        <Form.Group controlId="RegistrationForm.position">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="+380505555555"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              setError('');
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          block
          type="submit"
        >
          Submit
        </Button>
        <p className="RegistrationForm__error">{error}</p>
      </Form>
    </div>
  );
};

RegistrationForm.propTypes = {
  newLogin: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  setIsLogined: PropTypes.func.isRequired,
  setNeedRegistration: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};
