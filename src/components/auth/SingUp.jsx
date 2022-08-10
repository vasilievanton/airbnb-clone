import React from 'react';
import SingUpForm from './SingUpForm';

const SingUp = () => {
  return (
      <SingUpForm handleClick={() => console.log('click!')} />
  );
};

export default SingUp;
