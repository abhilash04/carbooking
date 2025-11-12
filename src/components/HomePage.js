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
import CarModel from "./CarModel";
import PlacesInKarnataka from "./PlacesInKarnataka";
import PlacesInSouth from "./PlacesInSouthIndia";

const HomePage = () => {
  return (
    <Grid>
      <PromoStrip />
      <Header />
      <Banner />
      <ChooseUs />
      <Services />
      <Work />
      <CarModel />
      <PlacesInKarnataka />
      <PlacesInSouth />
      <AboutUs />
      <Hero />
      <Pricing />
      <FAQ />
      <Footer />
    </Grid>
  );
};

export default HomePage;
