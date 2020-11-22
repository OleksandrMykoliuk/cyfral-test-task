import React from 'react';
import './AllUsers.scss';
import { ListGroup } from 'react-bootstrap';

export const AllUsers = () => {
  const users = Object.keys(localStorage);
  const userParameters = (user) => {
    const currentUser = JSON.parse(localStorage.getItem(user));
    const parameters = Object.values(currentUser);

    parameters.pop();

    return parameters.join(', ');
  };

  return (
    <div className="AllUsers">
      <ListGroup>
        {
          users.map(user => (
            <ListGroup.Item key={user}>
              {`${user} (${userParameters(user)})`}
            </ListGroup.Item>

          ))
        }
      </ListGroup>
    </div>
  );
};
