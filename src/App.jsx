// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Index from "./components/navbar/Index";
import Navbar from "./components/navbar/Navbar";
import Construction from "./pages/ConstructionandEcology/Construction";
import OilandGas from "./pages/OilandGas/OilandGas";
import Home from "./pages/Home/Home";
import Equipment from "./pages/EquipmentChemistry/Equipment";
import "./App.css";
import InnovativeTechnologies from "./pages/InnovativeTechnologies/InnovativeTechnologies";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="oil-gas" element={<OilandGas />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/innovativetech" element={<InnovativeTechnologies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
