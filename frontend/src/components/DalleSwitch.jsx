import React from 'react';
import { Card, Box, Typography, Switch } from '@mui/material';

const DalleSwitch = ({dalleAPIEnabled, handleSwitchChange}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--secondary-color)",
        padding: 2,
        marginTop: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
        <Typography variant="body1" color="black" sx={{ marginRight: 1 }}>
          Toggle DALL-E API
        </Typography>
        <Switch
          checked={dalleAPIEnabled}
          onChange={handleSwitchChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
      <Typography variant="caption" color="text.secondary">
        (DALLE will cost approx. $0.02 per API call.)
      </Typography>
    </Card>
  );
}

export default DalleSwitch;