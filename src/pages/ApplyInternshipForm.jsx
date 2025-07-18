import React from 'react';
import {  Box,  Grid,  TextField,  Button,  Typography,  Paper,} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ApplyInternshipForm = () => {
  const formik = useFormik({
    initialValues: {      fullName: '',      email: '',      phone: '',      course: '',      linkedin: '',      github: '',    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      course: Yup.string().required('Course is required'),
      linkedin: Yup.string().url('Enter a valid URL'),
      github: Yup.string().url('Enter a valid URL'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      alert('Internship application submitted successfully!');
    },
  });

  const fields = [
    { name: 'fullName', label: 'Full Name' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone Number' },
    { name: 'course', label: 'Course' },
    { name: 'linkedin', label: 'LinkedIn URL' },
    { name: 'github', label: 'GitHub URL' },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Paper sx={{ p: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Apply for Internship
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {fields.map(({ name, label, type = 'text' }) => (
              <Grid item xs={12} sm={name === 'linkedin' || name === 'github' ? 12 : 6} key={name}>
                <TextField
                  name={name}
                  label={label}
                  type={type}
                  value={formik.values[name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched[name] && Boolean(formik.errors[name])}
                  helperText={formik.touched[name] && formik.errors[name]}
                  fullWidth
                />
              </Grid>
            ))}

            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Button type="submit" variant="contained">
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ApplyInternshipForm;
