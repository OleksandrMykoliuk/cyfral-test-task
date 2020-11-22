import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './InputForm.scss';

export const InputForm = ({ setNewLogin,
  setNewPassword,
  setNeedRegistration,
  newLogin,
  newPassword }) => {
  const [error, setError] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const handleInputChange = (event) => {
    setNewLogin(event.target.value);
    setError('');
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newLogin && newPassword) {
      setNeedRegistration(true);
    }

    setError('Please, fill every field!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="InputForm.login">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          placeholder="Login"
          value={newLogin}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="InputForm.password">
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type={
              seePassword ? 'text' : 'password'
            }
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="Password"
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              type="button"
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
      <Button
        variant="primary"
        type="submit"
        block
      >
        Submit
      </Button>
      <p className="InputForm__error">
        {error}
      </p>
    </Form>
  );
};

InputForm.propTypes = {
  newLogin: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  setNeedRegistration: PropTypes.func.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  setNewLogin: PropTypes.func.isRequired,
};
