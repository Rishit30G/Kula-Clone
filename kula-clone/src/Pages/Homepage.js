import React from "react";
import { Button } from "@mui/material";

export const HomePage = () => {
  return (
    <div style={{paddingTop: '140px'}}>
      <div>
        <h1>Double the hires, half the</h1>
        <h1>effort</h1>
      </div>
      <div style={{paddingTop: '25px'}}>
        <p>
          Open conversations and nurture relationships at scale and be the first
          choice when your ideal
        </p>
        <p>candidate is ready to explore.</p>
      </div>
      <div style={{paddingTop: '15px'}}>
        <Button id="view-button" >View Kola Outreach</Button>
      </div>
    </div>
  );
};
