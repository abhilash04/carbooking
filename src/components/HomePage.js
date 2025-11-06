import { Grid } from "@mui/material";
import PromoStrip from "./PromoStrip";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Services from "./Services";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Work from "./Work";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Footer from "./common/Footer";
import Header from "./common/Header";
const HomePage = () => {
  return (
    <Grid>
      <PromoStrip />
      <Header />
      <Banner />
      <Services />
      <AboutUs />
      <Hero />
      <ChooseUs />
      <Work />
      <Pricing />
      <FAQ />
      <Footer />
    </Grid>
  );
};

export default HomePage;
