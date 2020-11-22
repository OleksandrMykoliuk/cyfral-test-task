import React, { useState } from 'react';
import './App.scss';
import { LoginForm } from './components/LoginForm/LoginForm';
import { RegistrationForm }
  from './components/RegistrationForm/RegistrationForm';
import { MainMenu } from './components/MainMenu/MainMenu';

export const App = () => {
  const [isLogined, setIsLogined] = useState(false);
  const [needRegistration, setNeedRegistration] = useState(false);
  const [newLogin, setNewLogin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  return (
    <div className="App">
      {!isLogined
      && !needRegistration
      && (
        <LoginForm
          setIsLogined={setIsLogined}
          setNewLogin={setNewLogin}
          setNewPassword={setNewPassword}
          setNeedRegistration={setNeedRegistration}
          newLogin={newLogin}
          newPassword={newPassword}
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
      )}
      {
        !isLogined
        && needRegistration
        && (
          <RegistrationForm
            setIsLogined={setIsLogined}
            setNeedRegistration={setNeedRegistration}
            newLogin={newLogin}
            newPassword={newPassword}
            setCurrentUser={setCurrentUser}
          />
        )
      }
      {
        isLogined
      && (
        <MainMenu
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )
      }
    </div>
  );
};
