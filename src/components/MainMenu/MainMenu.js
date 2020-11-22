import React, { useState } from 'react';
import './MainMenu.scss';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import { AllUsers } from '../AllUsers/AllUsers';
import { InputChange } from '../InputChange/InputChange';
import { ChangeForm } from '../ChangeForm/ChangeForm';

export const MainMenu = ({ currentUser, setCurrentUser }) => {
  const [key, setKey] = useState('change');

  return (
    <div className="MainMenu">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey="change" title="Change parameters">
          <ChangeForm
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Tab>
        <Tab eventKey="all" title="All users">
          <AllUsers />
        </Tab>
        <Tab eventKey="input" title="Input change">
          <InputChange />
        </Tab>
      </Tabs>
    </div>
  );
};

MainMenu.propTypes = {
  currentUser: PropTypes.string.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};
