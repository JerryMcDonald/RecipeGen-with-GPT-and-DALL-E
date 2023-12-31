import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const ExternalLinkAvatar = ({ imageUrl, tooltipTitle, sidebar=false, linkUrl }) => {
    const handleAvatarClick = () => {
      window.open(linkUrl, '_blank');
    };
  
    return (
      <Tooltip title={tooltipTitle}>
        <IconButton 
          onClick={handleAvatarClick} 
          sx={sidebar ? {p: 0, paddingBottom: 1} : { p: 0, display: {xs: "none", sm: 'block'}}}
        >
          <Avatar alt="Avatar" src={imageUrl} />
        </IconButton>
      </Tooltip>
    );
  };
  
  export default ExternalLinkAvatar;
  
