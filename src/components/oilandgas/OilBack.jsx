import React, { useEffect } from "react";
import home1 from "../../home/home1.jpeg";
import { Typography, Container, Stack } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const OilBack = () => {
  const { t } = useTranslation();
  const backgroundImageStyle = {
    paddingTop: 150,
    background: `url(${home1}) center/cover no-repeat`,
    height: "100vh",
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Stack spacing={2}>
          <Typography
            variant="h3"
            sx={{
              color: "orange",
            }}
          >
            Düýeli Depe
          </Typography>
          <Typography
            variant="h4"
            data-aos="fade-right"
            data-aos-delay="200"
            sx={{
              color: "#fff",
            }}
          >
            {t("oilTitle")}
          </Typography>
          <Typography
            variant="h6"
            data-aos="fade-right"
            data-aos-delay="600"
            color="#fff"
          >
            {t("chemistrySub")}
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default OilBack;
