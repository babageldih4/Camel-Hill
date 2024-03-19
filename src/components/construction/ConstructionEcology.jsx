// import React from "react";
import { Typography, Container, Stack } from "@mui/material";
import { titleStyle } from "../../style/style.mjs";
import { useTranslation } from "react-i18next";

const ConstructionEcology = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <Stack
          sx={{
            pt: "45px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              titleStyle,
            }}
          >
            {t("constructionEcology")}
          </Typography>
        </Stack>
        <Typography
          fontStyle="italic"
          sx={{
            pb: "20px",
          }}
        >
          {t("ecoDescription")}
        </Typography>
      </Container>
    </div>
  );
};

export default ConstructionEcology;
