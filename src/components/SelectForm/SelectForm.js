import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import './SelectForm.scss';
import PropTypes from 'prop-types';

export const SelectForm = ({ logins,
  setCurrentUser,
  setNeedRegistration,
  setIsLogined }) => {
  const [selectedUser, setSelectedUser] = useState(logins[0]);
  const [currentPassword, setCurrentPassword] = useState('');
  const [error, setError] = useState('');
  const [seePassword, setSeePassword] = useState(false);

  const handleSubmitSelect = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem(selectedUser));

    if (currentPassword === user.userPassword) {
      setCurrentUser(selectedUser);
      setIsLogined(true);
    }

    setError('Please, write valid password!');
    setCurrentPassword('');
  };

  const handleSelectChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setError('');
    setCurrentPassword(event.target.value);
  };

  const buttonHandle = () => {
    setNeedRegistration(true);
  };

  return (
    <div className="SelectForm">
      <Form onSubmit={handleSubmitSelect}>
        <Form.Group controlId="SelectForm.input">
          <Form.Label>Select User</Form.Label>
          <Form.Control
            as="select"
            value={selectedUser}
            onChange={handleSelectChange}
          >
            {logins.map(user => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="InputForm.password">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type={
                seePassword ? 'text' : 'password'
              }
              value={currentPassword}
              onChange={handlePasswordChange}
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
          block
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className="SelectForm__error">{error}</p>
      <Button
        variant="secondary"
        block
        type="button"
        onClick={buttonHandle}
        className="SelectForm__new-user"
      >
        Create new user
      </Button>
    </div>
  );
};

SelectForm.propTypes = {
  logins: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  setNeedRegistration: PropTypes.func.isRequired,
  setIsLogined: PropTypes.func.isRequired,
};
