import { Icon, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "../../Language/Language";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      textAlign={{ textAlign: "center" }}
      sx={{
        width: "100%",
        height: "50px",
        // height: "100%",
        alignItems: "center",
        background: "orange",
        color: "white",
        display: { md: "flex", lg: "flex", sm: "none", xs: "none" },
      }}
    >
      <Container>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"} spacing={5}>
            <Stack
              spacing={1}
              sx={{ flexDirection: "row", alignItems: "center" }}
            >
              <PhoneInTalkIcon />
              <Typography>+993 65-96-61-95</Typography>
            </Stack>
            <Stack
              spacing={1}
              sx={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <EmailIcon />
              <Typography> info@duyelidepe.com</Typography>
            </Stack>
            <Stack
              spacing={1}
              sx={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <WatchLaterIcon />
              <Typography>{t("workingHours")}: 08:00 - 07:00</Typography>
            </Stack>
          </Stack>
          <Language />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
