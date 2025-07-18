import React from 'react';
import { Box, Typography, Stack, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login", { replace: true }); 
  };

  return (
    <Box sx={{ px: 4, py: 5, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Welcome, Mahek 👋
      </Typography>
      <Typography variant="subtitle1" gutterBottom color="text.secondary">
        Here’s a quick overview of your internship activity.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} my={4}>
        {[
          { title: 'Total Applications', count: 4 },
          { title: 'Ongoing Internships', count: 2 },
          { title: 'Completed', count: 1 },
        ].map((item, index) => (
          <Card key={index} sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {item.count}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={4}>
        <Button variant="contained" color="primary">
          Apply for Internship
        </Button>
        <Button variant="outlined" color="primary">
          Edit Profile
        </Button>
        <Button
          variant="text"
          color="secondary"
          onClick={handleLogout} 
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
};

export default Dashboard;
