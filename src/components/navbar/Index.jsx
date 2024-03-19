import useMediaQuery from "@mui/material/useMediaQuery";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "./Navbar";
import Test from "../../pages/ContactUs";
import Footer from "../footer/Footer";
import MediaNavbar from "./MediaNavbar";
import Partners from "../partners/Partners";

const Index = () => {
  const isMediumScreen = useMediaQuery("(max-width: 960px)");
  return (
    <>
      <Header />
      {!isMediumScreen && <Navbar />}
      {isMediumScreen && <MediaNavbar />}
      <Outlet />
      <Partners />
      <Test />
      <Footer />
    </>
  );
};

export default Index;
