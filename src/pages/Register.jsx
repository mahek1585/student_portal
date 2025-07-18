import React from 'react';
import { Box, Typography, TextField, Button, Stack, Paper } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('user', JSON.stringify(values));  
      alert('Registration successful!');
      navigate('/login');  
    },
  });

  return (
    <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            {['name', 'email', 'password'].map((field) => (
              <TextField
                key={field}
                name={field}
                type={field === 'password' ? 'password' : 'text'}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[field] && Boolean(formik.errors[field])}
                helperText={formik.touched[field] && formik.errors[field]}
                fullWidth
              />
            ))}
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
