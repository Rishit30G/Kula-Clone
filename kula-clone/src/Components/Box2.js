import React from 'react';
import { Box } from '@mui/material';

export const VideoBox = () => {
  return (
    <div>
         <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "50px",
            }}
          >
            <div id="video-left">
              <video autoPlay muted loop width="700px" height="500px">
                <source
                  src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Box>
    </div>
  )
}
