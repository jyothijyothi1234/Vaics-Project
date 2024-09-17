import { Typography } from "@mui/material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

function SignInPage() {
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false); // Initially, password is hidden

  const handleClickShowPassword = () => setVisible(!visible);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ]
  });

  return (
    <Grid container size={12}>
      <Grid size={6} sx={{ height: "100%" }}>
        <img src="/downloadimage.png" alt="not found" style={{ height: "500px" }} />
      </Grid>

      <Grid size={6} sx={{ marginTop: "8%" }}>
        <Grid size={6} sx={{ display: "flex", height: "20%", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "40px", marginBottom: "20px", color: "blue" }}>
            Sign in to your account
          </Typography>
        </Grid>

        <Grid size={6}>
          <Typography sx={{ marginBottom: "20px", marginTop: "8px", fontSize: "20px" }}>
            Welcome to MasterControl
          </Typography>
        </Grid>

        <Grid size={6} sx={{ height: "30%" }}>
          <Typography sx={{ padding: "5px 0px 0px 100px", display: "flex" }}>
            UserId
          </Typography>
          <input
            type="number"
            placeholder="User ID"
            style={{ width: "70%", height: "30%", marginRight: "28px", borderLeftColor: "blue", borderLeftWidth: "15px" }}
          />
        </Grid>

        <Grid size={6} sx={{ height: "30%" }}>
          <Typography sx={{ padding: "5px 0px 0px 100px", display: "flex" }}>
            Password
          </Typography>

          <TextField
            type={visible ? 'text' : 'password'}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
           
            sx={{ width: "70%", height: "30%", marginRight: "28px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {visible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid size={6}>
          <BootstrapButton variant="contained" disableRipple sx={{ borderRadius: "20px", width: "20%", paddingBottom: "10px" }}>
            Sign In
          </BootstrapButton>
        </Grid>

        <Grid size={6}>
          <Typography sx={{ padding: "40px 0px 0px 0px" }}>
            Are you currently running MasterControl Version 2024.2?
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SignInPage;
