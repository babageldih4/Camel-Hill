import { useEffect } from "react";
import {
  YMaps,
  Map,
  FullscreenControl,
  Placemark,
  TypeSelector,
  RulerControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Stack,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Test = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Box
        sx={{ background: "gray", width: "100%", padding: "20px 0" }}
        mt={15}
      >
        <Container>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
              }}
            >
              Contact Us{" "}
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <Box component="form">
                <Stack
                  padding={2}
                  spacing={2}
                  sx={{
                    color: "#fff",
                    display: "flex",
                  }}
                >
                  <TextField
                    label="full name"
                    type="text"
                    required
                    sx={{
                      input: { color: "#fff" },
                      label: {
                        color: "#fff",
                      },
                    }}
                  ></TextField>
                  <TextField
                    label="email"
                    type="text"
                    sx={{
                      input: { color: "#fff" },
                      label: { color: "#fff" },
                    }}
                    required
                  ></TextField>
                  <TextField
                    label="message"
                    type="text"
                    sx={{
                      input: {
                        color: "#fff",
                      },
                      label: { color: "#fff" },
                    }}
                    multiline
                    rows={4}
                    required
                  ></TextField>
                  <Button color="primary" variant="contained">
                    Send
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <YMaps>
                <div>
                  <Map
                    defaultState={{
                      center: [37.892945, 58.368871], // Ashgabat, Turkmenistan coordinates
                      zoom: 16,
                      controls: ["fullscreenControl"],
                    }}
                    style={{
                      width: "100%",
                      height: "330px",
                      boxShadow: "4px 4px 7px rgba(0,0,0,0.9)",
                    }}
                  >
                    <Placemark geometry={[37.892945, 58.368871]} />
                    <TypeSelector options={{ float: "right" }} />
                    <RulerControl options={{ float: "right" }} />
                    <GeolocationControl options={{ float: "left" }} />
                  </Map>
                </div>
                <FullscreenControl />
              </YMaps>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Test;
