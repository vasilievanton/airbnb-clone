import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Card, Checkbox, Container, FormControlLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InputFormik from '../UI/InputFormik/InputFormik';
// import { CheckBox } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SingUpForm = ({ handleClick }) => {
  const [isShowPass, setShowPass] = useState(false);

  const validationsSchema = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    lastName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательное поле'),
    email: yup.string().email('Введите корректный E-mail').required('Обязательное поле'),
  });

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          password: '',
          confirmPassword: '',
          email: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleClick(values.email, values.password, values.name);
        }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <Box sx={{ display: 'flex' }}>
            <Card component="form" sx={{ p: 4, margin: '0 auto', mt: 4, width: '400px' }}>
              <InputFormik error={!!touched.name && !!errors.name} helperText={!!touched.name && !!errors.name ? errors.name : ' '} label="Имя" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
              <InputFormik error={!!touched.lastName && !!errors.lastName} helperText={!!touched.lastName && !!errors.lastName ? errors.lastName : ' '} label="Фамилия" name="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
              <InputFormik error={!!touched.email && !!errors.email} helperText={!!touched.email && !!errors.email ? errors.email : ' '} label="E-mail" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
              <InputFormik type={isShowPass ? 'text' : 'password'} error={!!touched.password && !!errors.password} helperText={!!touched.password && !!errors.password ? errors.password : ' '} label="Пароль" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
              <InputFormik
                type={isShowPass ? 'text' : 'password'}
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={!!touched.confirmPassword && !!errors.confirmPassword ? errors.confirmPassword : ' '}
                label="Подтвердите пароль"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography>
                  Уже есть аккаунт? <Link to="/login">Войти</Link>
                </Typography>
                <Button variant="contained" disabled={!isValid && !dirty} onClick={handleSubmit} type="submit">
                  Отправить
                </Button>
              </Box>
              <Box sx={{ mt: 3 }}>
                <FormControlLabel control={<Checkbox checked={isShowPass} onChange={() => setShowPass(!isShowPass)} name="passChecked" />} label="Показать пароль" />
              </Box>
            </Card>
          </Box>
        )}
      </Formik>
    </Container>
  );
};

export default SingUpForm;
