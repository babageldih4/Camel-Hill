import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography, Container, Stack } from "@mui/material";
import { IconButton } from "@mui/material";
// import ExpandMoreIcon from "@mui/material";

import Whoarewe from "../../components/home/Whoarewe";
// import Footer from "../../components/footer/Footer";
// import Partners from "../../components/partners/Partners";
// import Contact from "../../components/home/Contact";
import { useTranslation } from "react-i18next";
import { titleStyle, subTitle } from "../../style/style.mjs";

const Home = () => {
  const { t } = useTranslation();
  const back1 = "./oil/oilBack2.jpg";

  const backgroundImageUrl = (() => {
    try {
      return localStorage.getItem("back1") || back1;
    } catch (error) {
      console.error("We can't find backgroundIMage", error);
      return back1;
    }
  })();
  const backgroundImageStyle = {
    paddingTop: 150,
    background: `url(${backgroundImageUrl}) center/cover no-repeat`,
    height: "100vh",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div style={backgroundImageStyle}>
        <Container>
          <Stack spacing={2}>
            <Stack direction="row" spacing={3}>
              <Typography sx={titleStyle} color="#fff">
                Düýeli Depe
              </Typography>
            </Stack>
            <Typography
              sx={subTitle}
              data-aos="fade-right"
              data-aos-delay="600"
              color="#fff"
            >
              {t("homeTitle2")}
            </Typography>
          </Stack>
        </Container>
        <Stack
          data-aos="fade-up"
          data-aos-delay="800"
          direction="row"
          sx={{
            position: "absolute",
            width: "100%",
            bottom: 45,
          }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton className="motion-icon-button">
            {/* <ExpandMoreIcon sx={{ color: "#000", fontSize: "30px" }} /> */}
          </IconButton>
        </Stack>
      </div>
      <Whoarewe />
    </>
  );
};

export default Home;
