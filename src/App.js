import AboutUs from "./components/AboutUs/AboutUs";
import ContentCreation from "./components/ContentCreation";
import ContentStats from "./components/ContentStats";
import CreatingAssets from "./components/CreatingAssets";
import CurrentlyStruggling from "./components/CurrentlyStruggling/CurrentlyStruggling";
import CustomFunnels from "./components/CustomFunnels";
import EngagingCorrectly from "./components/EngagingCorrectly";
import EstablishingAuthority from "./components/EstablishingAuthority";
import GetFreeAccess from "./components/GetFreeAccess/GetFreeAccess";
import Herosection from "./components/HeroSection/HeroSection";
import Portfolio from "./components/Portfolio/Portfolio";
import LeadGeneration from "./components/LeadGeneration";
import MasteringPositioning from "./components/MasteringPositioning";
import OfferCreation from "./components/OfferCreation";
import StillNotConvenced from "./components/StillNotConvinced/StillNotConvinced";

function App() {
  return (
    <>
      <Herosection />
      <Portfolio />

      <CurrentlyStruggling />

      <GetFreeAccess />
      <ContentCreation />
      <OfferCreation />
      <EngagingCorrectly />
      <ContentStats />
      <LeadGeneration />
      <CustomFunnels />
      <EstablishingAuthority />
      <CreatingAssets />
      <MasteringPositioning />
      <StillNotConvenced />
      <GetFreeAccess />
      <AboutUs />
      <GetFreeAccess />
    </>
  );
}

export default App;
