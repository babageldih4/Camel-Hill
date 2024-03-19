import { Typography, Container, Stack } from "@mui/material";

import { Card, CardMedia, Grid, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Whoarewe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Stack
          sx={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1">ABOUT US</Typography>
        </Stack>
        <Typography>
          Welcoming you to the website and expressing our gratitude for your
          interest in our company. ES - Duyeli Depe is a modern, dynamically
          developing company that has brought together highly qualified
          specialists with many years of experience and knowledge in their
          field. Starting its activities in 2021 in construction and providing
          services for environmental impact assessment (EIA), contributing to
          sustainable development for companies such as Eni Turkmenistan, China
          National Oil and Gas Company in Turkmenistan, Dragon Oil, and Chalik
          Energy. Collaborating with leading equipment manufacturers, chemical
          and service companies in the oil and gas industry, and technological
          companies producing innovative developments in all industries allows
          us to offer high-quality products, services, and solutions for
          Turkmenistan market. In our work, we strive to find an individual
          approach to each client and are focused on long-term and mutually
          beneficial cooperation
        </Typography>

        <Stack display="flex" direction="row" spacing={2}>
          <Grid container spacing={2}>
            <Grid item lg={3} md={3} sm={6} xs={8}>
              <Stack spacing={4}>
                <Card
                  sx={{
                    maxWidth: 345,
                    cursor: "pointer",
                    boxShadow: " 2px 4px 6px  rgba(0,0,0,0.5)",
                    "&:hover": {
                      boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="src"
                    height="150"
                    image="./who/who1.jpg"
                  />
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => navigate("./construction")}
                    >
                      <Typography>Construction/Ecology</Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Stack>
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={8}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    maxWidth: 345,
                    cursor: "pointer",
                    boxShadow: " 2px 4px 6px  rgba(0,0,0,0.5)",
                    "&:hover": {
                      boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="src"
                    height="150"
                    image="./who/who3.jpg"
                  />
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => navigate("./construction")}
                    >
                      <Typography>Oil and Gas Services</Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Stack>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={8}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    maxWidth: 345,
                    cursor: "pointer",
                    boxShadow: " 2px 4px 6px  rgba(0,0,0,0.5)",
                    "&:hover": {
                      boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="src"
                    height="150"
                    image="./who/who2.jpg"
                  />
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => navigate("./construction")}
                    >
                      <Typography>Equipment/Chemistry</Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Stack>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={8}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    maxWidth: 345,
                    cursor: "pointer",
                    boxShadow: " 2px 4px 6px  rgba(0,0,0,0.5)",
                    "&:hover": {
                      boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="src"
                    height="150"
                    image="./who/who4.jpg"
                  />
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => navigate("./construction")}
                    >
                      <Typography>Innovative Technologies</Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
};

export default Whoarewe;
