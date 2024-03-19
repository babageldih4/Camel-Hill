import React from "react";
import OilBack from "../../components/oilandgas/OilBack";
import HydraulicFacturingOil from "../../components/oilandgas/HydraulicFacturingOil";
import { Container } from "@mui/material";

const OilandGas = () => {
  return (
    <div>
      <OilBack />
      <Container>
        <HydraulicFacturingOil />
      </Container>
    </div>
  );
};

export default OilandGas;
