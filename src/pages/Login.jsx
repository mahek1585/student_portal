import React from 'react';
import {Box, Typography, TextField, Button, Stack, Paper} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (vals) => {
      console.log(vals);
      alert('Login Successful!');
    },
  });

  return (
    <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login to Your Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {[
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Password', name: 'password', type: 'password' },
            ].map(({ label, name, type }) => (
              <TextField
                key={name}
                label={label}
                name={name}
                type={type}
                fullWidth
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[name] && Boolean(errors[name])}
                helperText={touched[name] && errors[name]}
              />
            ))}

            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
