import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  const handleRegisterFormSubmit = (values) => {
    console.log('values', values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleRegisterFormSubmit} />
    </div>
  );
}

export default Register;
