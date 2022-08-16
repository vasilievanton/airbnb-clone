import React from 'react';
import SingUpForm from './SingUpForm';
import { getAuth, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../store/actions';
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (email, password, name) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        return user
      })
      .then((user)=>{
        console.log(user);
        updateProfile(getAuth().currentUser, {
          displayName: name,
        })
        dispatch(setUserAction(user.uid, user.email, user.accessToken, name));
        navigate('/');

      })
      .catch((error) => {
        console.log(error);
      });

  };
  return <SingUpForm handleClick={handleClick} />;
};

export default SingUp;
