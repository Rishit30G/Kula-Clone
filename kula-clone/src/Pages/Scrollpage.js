import React, { useEffect, useState } from "react";
import { Grid, Stack, Box } from "@mui/material";
const Scrollpage = () => {
  const [data, setData] = useState([]);
  let api = "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1";

  const fecthApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //So that on re-rendering the page it is not reloaded and it only changes when it is required
  useEffect(() => {
    fecthApiData(api);
  }, []);

  var rightGrid = document.getElementById("right-grid");
  var videoLeft = document.getElementById("video-left");
  var currentVideoIndex = 0;
  
  useEffect(() => {
    if (rightGrid) {
      rightGrid.addEventListener("scroll", function () {
        
        if (rightGrid.scrollTop >= 0 && rightGrid.scrollTop <= 500) {
          currentVideoIndex = 1;
          videoLeft = document.getElementById("video-left");
          videoLeft.innerHTML = `<video autoPlay muted loop width='700px' height='500px'>
                                  <source
                                    src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
                                    type="video/mp4"
                                  />
                                </video>`;
        } else if (
          rightGrid.scrollTop >= 0 &&
          rightGrid.scrollTop >= 501 &&
          rightGrid.scrollTop <= 1002
        ) {
          currentVideoIndex = 2;
          videoLeft = document.getElementById("video-left");
          videoLeft.innerHTML = `<video autoPlay muted loop width='700px' height='500px'>
                                  <source
                                    src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4"
                                    type="video/mp4"
                                  />
                                </video>`;
        } else if (rightGrid.scrollTop >= 1003) {
          currentVideoIndex = 3;
          videoLeft = document.getElementById("video-left");
          videoLeft.innerHTML = `<video autoPlay muted loop width='700px' height='500px'>
                                  <source
                                    src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4"
                                    type="video/mp4"
                                  />
                                </video>`;
        }
      });
    }
  });


  let heading = [];
  let subheading = [];
  let description = [];
  data.texts && data.texts.map((item) => heading.push(item.heading));
  data.texts && data.texts.map((item) => subheading.push(item.subHeading));
  data.texts && data.texts.map((item) => description.push(item.description));

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} id="right-grid">
          <Stack
            direction="column"
            spacing={60}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                height: "400px",
                width: "500px",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <h2>{heading[0]}</h2>
              <h1>{subheading[0]}</h1>
              <p>{description[0]}</p>
            </Box>

            <Box
              sx={{
                height: "400px",
                width: "500px",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <h2>{heading[1]}</h2>
              <h1>{subheading[1]}</h1>
              <p>{description[1]}</p>
            </Box>
            <Box
              sx={{
                height: "400px",
                width: "500px",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <h2>{heading[2]}</h2>
              <h1>{subheading[2]}</h1>
              <p>{description[2]}</p>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Scrollpage;