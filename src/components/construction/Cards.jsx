// import React from "react";
import {
  Card,
  // Collapse,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  // CardActions,
  // Button,
  // Divider,
  // Stack,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  CardActions,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { constructionEcologyItems } from "../../data/data.mjs";

function Cards() {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        {constructionEcologyItems.map((item, index) => {
          <Grid container>
            <Grid key={`constructionEcologyItems_key_${index}`} item>
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Typography>CardMedia</Typography>
                  </CardMedia>
                  <CardContent>
                    <Accordion>
                      <AccordionSummary>
                        <Button>{t("more")}</Button>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{t(item.title)}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>;
        })}

        <Grid container spacing={4}>
          {constructionEcologyItems.map((item, index) => {
            <Grid
              key={`constructionEcologyItems_key_${index}`}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <Card
                sx={{
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  minHeight: 320,
                  "&:hover": {
                    boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
                  },
                }}
              >
                {" "}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.pic}
                    alt={t(item.title)}
                  />
                  <CardContent>
                    <Typography>{t(item.title)}</Typography>
                    <Accordion>
                      <AccordionSummary>
                        <CardActions>
                          <Button>{t("more")}</Button>
                        </CardActions>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{t(item.title)}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>;
          })}
        </Grid>
        {/* <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
          }}
        >
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Stack>
              <Card
                sx={{
                  maxWidth: 345,

                  boxShadow: " 2px 4px 6px  rgba(0,0,0,0.5)",
                  "&:hover": {
                    boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./construction/pic1.png"
                    alt="construction"
                  />
                  <CardContent>
                    <Typography variant="h6"> {t("ecoT1")}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      More
                    </Button>
                  </CardActions>
                  <Divider />
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography>{t("ecoDesc1")}</Typography>
                    </CardContent>
                  </Collapse>
                </CardActionArea>
              </Card>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card
              sx={{
                maxWidth: 345,

                boxShadow: " 2px 4px 6px  rgba(0,0,0,0.5)",
                "&:hover": {
                  boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  //C:\Users\Babageldi\Desktop\yarn1\vite\public\construction\cons7.png
                  image="./construction/cons7.png"
                  alt="construction"
                />
                <CardContent>
                  <Typography variant="h6"> {t("ecoT2")}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    More
                  </Button>
                </CardActions>
                <Divider />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography>{t("ecoDesc2")}</Typography>
                  </CardContent>
                </Collapse>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card
              sx={{
                maxWidth: 345,

                boxShadow: " 2px 4px 6px  rgba(0,0,0,0.5)",
                "&:hover": {
                  boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="./equipment/eco6.png"
                  alt="construction"
                />
                <CardContent>
                  <Typography variant="h6">{t("ecoT3")}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    
                  </Button>
                </CardActions>
                <Divider />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography>{t("ecoDesc3")}</Typography>
                  </CardContent>
                </Collapse>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
}

export default Cards;
