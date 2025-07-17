import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f0f4f8',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Welcome to the Student Internship Portal
        </Typography>

        <Typography variant="h6" color="textSecondary" gutterBottom>
          Easily register, explore internships, and manage your dashboard — all in one place!
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/register"
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to="/login"
          >
            Already have an account?
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
