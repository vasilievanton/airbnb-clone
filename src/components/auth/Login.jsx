import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../store/actions';
import LoginForm from './LoginForm';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleClick = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUserAction(user.uid, user.email, user.accessToken, user.displayName));
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch(setUserAction());
  };
  return <LoginForm title="log in" handleClick={handleClick} />;
};

export default Login;
