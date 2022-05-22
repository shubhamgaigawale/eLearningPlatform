import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Container, createTheme, Paper, ThemeProvider } from '@mui/material';

export default function Signup() {
  const theme = createTheme();

  return (
    <React.Fragment>

      <ThemeProvider theme={theme}>

        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Student Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="emailId"
                  name="EmailID"
                  label="Email ID"
                  fullWidth
                  autoComplete='Email'
                  variant="standard"
                >
                </TextField>
              </Grid>

              <Grid item xs={12} >

                <TextField
                  required
                  id="date"
                  name="BirthDate"
                  label=""
                  fullWidth
                  autoComplete='date'
                  variant="standard"
                  type="date">
                </TextField>
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="date"
                  name="mobile number"
                  label="mobile number"
                  fullWidth
                  variant="standard"
                  type="tel"

                  >
                </TextField>
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="date"
                  name="mobile number"
                  label="mobile number"
                  fullWidth
                  variant="standard"
                  type="tel"

                >
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  id="blood grp"
                  name="mobile number"
                  label="parents  mobile number"
                  fullWidth
                  variant="standard"
                  type="tel"

                >
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  id="blood grp"
                  name="bloodGroup"
                  label="Blood Group"
                  fullWidth
                  variant="standard"
                  type=""

                >
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}  >
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  variant="standard"
                  type="password"

                >
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      console.log("Clicked")
                    }}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}