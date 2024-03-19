import { Box, Grid } from "@mui/material";
import {
  YMaps,
  Map,
  FullscreenControl,
  Placemark,
  TypeSelector,
  RulerControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";

const Contact = () => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "60vh" }}>
        <Grid container spacing={5} zIndex={1000}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            first section
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ zIndex: 1000 }}>
            <YMaps
              style={{
                height: "100%",
              }}
            >
              <div style={{ height: "100%" }}>
                <Map
                  defaultState={{
                    center: [37.892945, 58.368871], // Ashgabat, Turkmenistan coordinates
                    zoom: 16,
                    controls: ["fullscreenControl"],
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    pt: "0px",
                    // boxShadow: "4px 4px 7px rgba(0,0,0,0.9)",
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
      </Box>
    </div>
  );
};

export default Contact;
