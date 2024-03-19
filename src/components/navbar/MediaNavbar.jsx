import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { smallNavbarItems } from "../../data/data.mjs";

// import { SyncAlt } from "@mui/icons-material";

function MediaNavbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, SetisDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      <Box
        sx={{
          background: "gray",
          display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
          pt: 2,
          height: 80,
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            // direction: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack>
            <Link to="/home">
              <img src="./images/logo.png" alt="Logo" />
            </Link>
          </Stack>
          <Stack>
            <IconButton onClick={() => SetisDrawerOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Drawer
              open={isDrawerOpen}
              onClose={() => SetisDrawerOpen(false)}
              anchor="right"
              // sx={{
              //   color: "white",
              // }}
            >
              {smallNavbarItems.map((element, index) => {
                return (
                  <Typography
                    key={`small_navbar_key${index}`}
                    // key={{ index }}
                    onClick={() => navigate(element.path)}
                    // {console.log('element.path')}

                    sx={{
                      pl: "20px",
                      pt: "20",
                      color: "black",
                      cursor: "pointer",
                      textDecoration:
                        location.pathname === element.path
                          ? "underline"
                          : "none",
                    }}
                  >
                    {element.title}
                  </Typography>
                );
              })}
            </Drawer>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default MediaNavbar;
