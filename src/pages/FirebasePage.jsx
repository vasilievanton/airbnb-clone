import { Box, Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const FirebasePage = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: '',
    age: '',
  });

  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: inputValue.name, age: inputValue.age});
    getUsers();

  };
  
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const inputChange = (e, type) => {
    setInputValue({ ...inputValue, [type]: e.target.value });
  };
  return (
    <Container>
      <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField sx={{ mb: 2 }} value={inputValue.name} onChange={(e) => inputChange(e, 'name')} label="name" variant="outlined" />
        <TextField type='number'  sx={{ mb: 2 }} value={inputValue.age} onChange={(e) => inputChange(e, 'age')} label="age" variant="outlined" />
        <Button onClick={createUser}>Создать</Button>
      </Box>
      {users.map((user) => (
        <Box sx={{ mt: 5 }} key={user.id}>
          {user.name && <Typography>Name: {user.name}</Typography>}
          {user.age && <Typography>Age: {user.age}</Typography>}
        </Box>
      ))}
    </Container>
  );
};

export default FirebasePage;
