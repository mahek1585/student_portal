import React from 'react';
import { Box, TextField, Button, Typography, Stack, Paper} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

const Register = () => {
  const {
    values, errors, touched, handleChange, handleBlur, handleSubmit
  } = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      alert('Registration successful!');
    },
  });

  const fields = [
    { label: 'Full Name', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
  ];

  return (
    <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create an Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {fields.map(({ label, name, type }) => (
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
              Register
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};
export default Register;
