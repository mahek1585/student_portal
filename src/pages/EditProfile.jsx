import React, { useState } from "react";
import {  Avatar,  Box,  Button,  Container,  Grid,  Paper,  TextField,  Typography,} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const EditProfile = () => {
  const [avatarPreview, setAvatarPreview] = useState("");

  const initialValues = {    fullName: "",    email: "",    phone: "",    course: "",    github: "",    avatar: null,  };

  const validationSchema = Yup.object({
    fullName: Yup.string(),
    email: Yup.string().email("Invalid email"),
    phone: Yup.string().matches(/^\d{10}$/, "Must be 10 digits"),
    course: Yup.string(),
    github: Yup.string().url("Invalid URL"),
    avatar: Yup.mixed()
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    alert("Profile updated!");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Edit Profile
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, handleChange,  }) => (
            <Form>
              <Box textAlign="center" mb={3}>
                <label htmlFor="avatar-upload">
                  <input
                    id="avatar-upload"
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFieldValue("avatar", file);
                        setAvatarPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  <Avatar
                    src={avatarPreview}
                    sx={{
                      width: 90,
                      height: 90,
                      margin: "auto",
                      cursor: "pointer",
                    }}
                  />
                </label>
              </Box>

              <Grid container spacing={3}>
                {[
                  { name: "fullName", label: "Full Name" },
                  { name: "email", label: "Email" },
                  { name: "phone", label: "Phone Number" },
                  { name: "course", label: "Course" },
                  { name: "github", label: "GitHub Link" },
                ].map((field) => (
                  <Grid item xs={12} key={field.name}>
                    <TextField
                      fullWidth
                      label={field.label}
                      name={field.name}
                      value={values[field.name]}
                      onChange={handleChange}
                    />
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <Box textAlign="center">
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                      Update Profile
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default EditProfile;
