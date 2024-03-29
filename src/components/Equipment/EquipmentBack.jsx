import { Container, Stack, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { subTitle, titleStyle } from "../../style/style.mjs";
import back1 from "../../components/Equipment/back1.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const backgroundImageStyle = {
    paddingTop: 150,
    background: `url(${back1}) center/cover no-repeat`,
    height: "100vh",
  };

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Stack spacing={2}>
          <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
            <Typography sx={titleStyle} color="orange">
              Düýeli Depe
            </Typography>
          </Box>
          <Typography
            data-aos="fade-left"
            data-aos-delay="600"
            sx={subTitle}
            color="#fff"
          >
            {t("chemistryTitle")}
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

export default Hero;
