import { Container, Typography, Box, Stack } from "@mui/material";
import { useEffect } from "react";
import ConstructionEcology from "../../components/construction/ConstructionEcology";
import AOS from "aos";
import "aos/dist/aos.css";
import Cards from "../../components/construction/Cards";
import { useTranslation } from "react-i18next";

const Construction = () => {
  const back1 = "./construction/cons5.jpg";
  const { t } = useTranslation();

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
        <Box>
          <Container>
            <Stack spacing={2} sx={{}}>
              {" "}
              <Typography variant="h3" sx={{ color: "orange" }}>
                Düyeli depe
              </Typography>
              <Typography
                variant="h4"
                sx={{}}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {t("ecoTitle")}
                Economic Society: Building a Sustainable Future{" "}
              </Typography>
              <Typography
                variant="h6"
                data-aos="fade-right"
                fade-aos-delay="200"
                sx={{}}
              >
                {t("ecoSubTitle")}
                Building excellence, preserving the environment, and innovating
                for tomorrow.
              </Typography>
            </Stack>
          </Container>
        </Box>
      </div>
      <ConstructionEcology />
      <Cards />
    </>
  );
};

export default Construction;
