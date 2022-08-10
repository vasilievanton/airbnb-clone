import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  return <LoginForm title="log in" handleClick={()=>console.log('click!')} />;
};

export default Login;
