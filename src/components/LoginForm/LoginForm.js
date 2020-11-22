import React from 'react';
import './LoginForm.scss';
import PropTypes from 'prop-types';
import { SelectForm } from '../SelectForm/SelectForm';
import { InputForm } from '../InputForm/InputForm';

export const LoginForm = ({
  setNeedRegistration,
  setNewPassword,
  setNewLogin,
  newLogin,
  newPassword,
  setCurrentUser,
  setIsLogined,
}) => {
  const logins = Object.keys(localStorage);

  return (
    <div className="LoginForm">
      {logins.length !== 0
        ? (
          <SelectForm
            logins={logins}
            setCurrentUser={setCurrentUser}
            setIsLogined={setIsLogined}
            setNeedRegistration={setNeedRegistration}
          />
        )
        : (
          <InputForm
            setNewLogin={setNewLogin}
            setNewPassword={setNewPassword}
            setNeedRegistration={setNeedRegistration}
            newLogin={newLogin}
            newPassword={newPassword}
          />
        )}
    </div>
  );
};

LoginForm.propTypes = {
  newLogin: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  setIsLogined: PropTypes.func.isRequired,
  setNeedRegistration: PropTypes.func.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  setNewLogin: PropTypes.func.isRequired,
};
