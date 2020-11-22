/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './InputChange.scss';

export const InputChange = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleOutputChange = (event) => {
    setOutput(event.target.value);
  };

  const handleButton = () => {
    setOutput(input);
  };

  return (
    <div className="InputChange">
      <Form>
        <Form.Control
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Input"
        />
        <Button
          block
          variant="danger"
          type="button"
          onClick={handleButton}
        >
          Set Value
        </Button>
        <Form.Control
          type="text"
          value={output}
          onChange={handleOutputChange}
          placeholder="Output"
        />
      </Form>
    </div>
  );
};
