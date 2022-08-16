import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Card, Checkbox, Container, FormControlLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InputFormik from '../UI/InputFormik/InputFormik';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleClick }) => {
  const [isShowPass, setShowPass] = useState(false);

  const validationsSchema = yup.object().shape({
    email: yup.string().email('Введите корректный E-mail').required('Обязательное поле'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
  });
   
  return (
    <Container>
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleClick(values.email, values.password);
        }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <Box sx={{ display: 'flex' }}>
            <Card component="div" sx={{ p: 4, margin: '0 auto', mt: 4, width: '400px' }}>
              <Box component="form" sx={{ margin: '0 auto', width: '400px' }}>
                <InputFormik error={!!touched.email && !!errors.email} helperText={!!touched.email && !!errors.email ? errors.email : ' '} label="E-mail" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                <InputFormik type={isShowPass ? 'text' : 'password'} error={!!touched.password && !!errors.password} helperText={!!touched.password && !!errors.password ? errors.password : ' '} label="Пароль" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>
                    Нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
                  </Typography>
                  <Button variant="contained" disabled={!isValid && !dirty} onClick={handleSubmit} type="submit">
                    Войти
                  </Button>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <FormControlLabel  control={<Checkbox checked={isShowPass} onChange={() => setShowPass(!isShowPass)} name="passChecked" />} label="Показать пароль" />
                </Box>
              </Box>
            </Card>
          </Box>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
