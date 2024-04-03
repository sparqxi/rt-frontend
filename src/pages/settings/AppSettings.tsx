import React from 'react';
import { Box, Typography, Checkbox, Switch, FormControlLabel, FormGroup, Button, TextField, styled, Grid, IconButton } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security'; // You can choose an appropriate icon
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SecuritySection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: theme.shadows[2], // Add shadow for depth
}));




function AppSettings() {
  
  return (
    <Box sx={{ margin: 2, border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: 2 }}>
    <Typography variant="h6" gutterBottom>
      Application Settings
    </Typography>
    
    <Grid container spacing={3}>
      {/* Beginner to Normal Mode Section */}
      <Grid item xs={12} md={6}>
        <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Mode</Typography>
          <FormControlLabel
            control={<Switch name="checkedA" />}
            label="Beginner Mode"
          />
        </Box>

        {/* Additional Settings Section */}
        <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: 2 }}>
          <Typography variant="h6">Additional Settings</Typography>
          <FormControlLabel control={<Checkbox />} label="Enable Feature X" />
          <FormControlLabel control={<Checkbox />} label="Enable Feature Y" />
          <TextField
            fullWidth
            label="Setting Parameter"
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained">Apply Changes</Button>
        </Box>
      </Grid>

      {/* New Random Settings Section */}
      <Grid item xs={12} md={6}>
        <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: 2 }}>
          <Typography variant="h6">Random Settings</Typography>
          <FormControlLabel control={<Checkbox />} label="Enable Random Feature 1" />
          <FormControlLabel control={<Checkbox />} label="Enable Random Feature 2" />
          <TextField
            fullWidth
            label="Random Setting Input"
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained">Update Settings</Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
  
  
  );
}

export default AppSettings;
