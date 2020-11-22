/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ChangeForm.scss';

export const ChangeForm = ({ currentUser, setCurrentUser }) => {
  const user = JSON.parse(localStorage.getItem(currentUser));
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const buttonLoginHandle = () => {
    localStorage.removeItem(currentUser);
    localStorage.setItem(login, JSON.stringify(user));
    setCurrentUser(login);
    setLogin('');
  };

  const buttonHandle = () => {
    if (name) {
      user.userName = name;
      setName('');
    }

    if (position) {
      user.userPosition = position;
      setPosition('');
    }

    if (phone) {
      user.userPhone = phone;
      setPhone('');
    }

    if (password
      && confirmedPassword
      && password === confirmedPassword) {
      user.userPassword = password;
      setPassword('');
      setConfirmedPassword('');
    }

    localStorage.setItem(currentUser, JSON.stringify(user));
  };

  return (
    <div className="ChangeForm">
      <Form>
        <br />
        <Row>
          <Col>
            <span>
              {`Login : ${currentUser}`}
            </span>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Change login"
              value={login}
              onChange={(event) => {
                setLogin(event.target.value);
              }}
            />
          </Col>
          <Col>
            <Button
              variant="danger"
              type="button"
              onClick={buttonLoginHandle}
            >
              Change login
            </Button>
          </Col>
        </Row>
        <br />
        <hr />
        <Row>
          <Col>
            <span>
              {`Name : ${user.userName}`}
            </span>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Change name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <span>
              {`Position : ${user.userPosition}`}
            </span>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Change position"
              value={position}
              onChange={(event) => {
                setPosition(event.target.value);
              }}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <span>
              {`Phone number : ${user.userPhone}`}
            </span>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Change phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <span>
              {`Password : ${user.userPassword}`}
            </span>
          </Col>
          <Col>
            <Form.Control
              type="password"
              placeholder="Change password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmedPassword}
              onChange={(event) => {
                setConfirmedPassword(event.target.value);
              }}
            />
          </Col>
        </Row>
        <br />
        <Button
          block
          variant="primary"
          type="button"
          onClick={buttonHandle}
        >
          Confirm
        </Button>
      </Form>
    </div>
  );
};

ChangeForm.propTypes = {
  currentUser: PropTypes.string.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};
