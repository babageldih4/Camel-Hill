import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Paper, Box, Typography, Container, Stack } from "@mui/material";
import { smallNavbarItems } from "../../data/data.mjs";
import Language from "../../Language/Language";
// import { Language } from "@mui/icons-material";

function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //Scrolled navbar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      //If navbar scrolled , then setIscrolled = true;
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: { md: "flex", lg: "flex", sm: "none", xs: "none" },
          alignItems: "center",
        }}
      >
        <Paper
          elevation={isScrolled ? 5 : 0}
          sx={{
            position: "fixed",
            width: "100%",
            top: isScrolled ? 0 : { lg: "50px", md: "50px", xs: 0, sm: 0 },
            backgroundColor: isScrolled ? "gray" : "transparent",
            display: "flex",
            zIndex: 1000,
            alignItems: "center",
            height: 80,
          }}
        >
          <Container>
            <Stack
              sx={{
                direction: "row",
                width: "100%",
                textAlign: "center",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  direction: "row",
                  alignItems: "center",
                }}
              >
                <Link to="/">
                  <img src="./images/logo.png" alt="Logo" />
                </Link>
                <Stack direction="row" spacing={2}>
                  {smallNavbarItems.map((element, index) => {
                    const delay = 100 + index * 400;
                    return (
                      <Typography
                        key={`small_navbar_key${index}`}
                        // key={{ index }}
                        data-aos="fade-down"
                        data-aos-delay={delay}
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
                    );
                  })}
                </Stack>
              </Stack>
              {isScrolled && <Language />}
            </Stack>
            {/* </Stack> */}
          </Container>
        </Paper>
      </Box>
    </div>
  );
}
export default Navbar;

// <Link
//   key={`small_navbar_key${index}`}
//   to={`/${linkCategory.link}`}
//   style={{
//     textDecoration:
//       location.pathname === `/${linkCategory.link}`
//         ? "underline"
//         : "none",
//     textUnderlineOffset: "7px",
//     fontWeight: 400,
//   }}
// >
//   <Typography

//     data-aos="fade-down"
//     data-aos-delay={delay}

//     sx={{
//       fontSize: "15px",
//       fontWeight: 400,
//       textDecoration:
//         location.pathname === `/${linkCategory.link}`
//           ? "underline"
//           : "none",
//       color: "#fff",
//       textUnderlineOffset: "7px",
//     }}
//   >
//     {t(linkCategory.title)}
//   </Typography>
// </Link>
