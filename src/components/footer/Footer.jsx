import { useEffect } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { Typography, Divider, Stack, Grid } from "@mui/material";
import { Container } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { smallNavbarItems } from "../../data/data.mjs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <Stack
      sx={{
        backgroundColor: "#121212",
        display: "flex",
        direction: "row",
        pt: "45px",
      }}
    >
      <Container>
        <Grid container>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            {" "}
            <Stack
              sx={{
                textDecoration: "underline",
                color: "white",
              }}
            >
              <Typography variant="h4">Navigation</Typography>
            </Stack>
            <Stack
              sx={{
                color: "white",
              }}
            >
              {smallNavbarItems.map((element, index) => {
                const delay = 100 + index * 400;
                return (
                  <Stack
                    data-aos="fade-down"
                    data-aos-delay={delay}
                    spacing={2}
                    key={`small_navbar_key${index}`}
                    sx={{
                      color: "white",
                    }}
                  >
                    <Typography
                      // key={{ index }}
                      onClick={() => navigate(element.path)}
                      sx={{
                        color: "white",
                        cursor: "pointer",
                        textDecoration:
                          location.pathname === element.path
                            ? "underline"
                            : "none",
                      }}
                    >
                      {t(element.title)}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Stack
              spacing={1.5}
              sx={{
                color: "white",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textDecoration: "underline",
                }}
              >
                Contacts
              </Typography>
              <Typography>
                <PhoneInTalkIcon />
                +993 65-96-61-95
              </Typography>
              <Typography>
                <EmailIcon />
                info@duyelidepe.com
              </Typography>
              <Typography>
                <LocationOnIcon />
                Ashgabat , Türkmenistan 1972(Ataturk)street building 82
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography
              sx={{
                justifyContent: "center",
                color: "white",
              }}
            >
              Innovations, Technologies, Results: Together towards the Business
              of the Future
              <img src="./images/logo.png" alt="Logo" />
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* <Box
        sx={{ width: "100%", height: "1.5px", background: "#121212" }}
        mt={3}
      > */}
      <Stack
        sx={{
          pb: "10px",
        }}
      >
        <Divider
          sx={{
            color: "#fff",
          }}
        />
        <Typography
          data-aos="fade-up"
          data-aos-delay="400"
          sx={{
            color: "#fff",
            textAlign: "center",
            pt: 1,
            fontSize: "15px",
          }}
        >
          Duyeli Depe 2024 ©
        </Typography>
      </Stack>
      {/* </Box> */}
    </Stack>
  );
};

export default Footer;
