import {
  Divider,
  Typography,
  Container,
  ImageList,
  ImageListItem,
  Grid,
  Box,
} from "@mui/material";
import { partnersItems } from "../../data/data.mjs";
import { useTranslation } from "react-i18next";
// import { WidthFull } from "@mui/icons-material";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Container data-aos="fade-down" data-aos-delay="600">
        <Box pt={10}>
          <Divider />
          <Box pt={10} pb={10}>
            <Grid container spacing={7}>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                {" "}
                <Typography variant="h6" sx={{ color: "#f1f11" }}>
                  {t("partnership")}
                </Typography>{" "}
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={12}>
                {" "}
                <Box>
                  <ImageList cols={4}>
                    {partnersItems.map((element, index) => (
                      <ImageListItem key={index}>
                        <div
                          style={{
                            width: "100px",
                            height: "80px",
                          }}
                        >
                          <img
                            src={`${element.pic}`}
                            // alt={element.title}
                            loading="lazy"
                            style={{
                              width: "100px",
                              height: "80px",
                            }}
                          />
                          {/* </Stack> */}
                        </div>
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </Box>
      </Container>
    </div>
  );
};

export default Partners;

// <Container>
// <Divider>
//   <Stack
//     spacing={2}
//     sx={{
//       display: "flex",
//       direction: "row",
//     }}
//   >
//     <Grid container spacing={2}>
//       <Grid item lg={6} md={6} sm={12} xs={12}>
//         <Typography>
//           Partnership - is the key to joint success, because together we
//           create not just connections but the future
//         </Typography>
//       </Grid>
//       <Grid item lg={6} md={6} sm={12} xs={12}>
//         <Stack
//           spacing={2}
//           sx={{
//             display: "flex",
//             width: "max-width",
//           }}
//         >
//           <ImageList
//             sx={{ width: 200, height: 150 }}
//             cols={4}
//             width="maxWidth"
//             rowHeight={100}
//           >
//             {partnersItems.map((element, index) => (
//               <ImageListItem key={element.id}>
//                 <img
//                   src={`${element.pic}`}
//                   // alt={element.title}
//                   loading="lazy"
//                 />
//               </ImageListItem>
//             ))}
//           </ImageList>
//         </Stack>
//       </Grid>
//     </Grid>
//   </Stack>
// </Divider>
// </Container>
