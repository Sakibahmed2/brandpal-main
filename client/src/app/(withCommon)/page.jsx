import Banner from "@/components/pages/HomePage/Banner/Banner";
import LetsJoin from "@/components/pages/HomePage/LetsJoin/LetsJoin";
import Partner from "@/components/pages/HomePage/Partner/Partner";
import StrategyMarketing from "@/components/pages/HomePage/StrategyMarketing/StrategyMarketing";
import Testimony from "@/components/pages/HomePage/Testimony/Testimony";
import WhatWeDo from "@/components/pages/HomePage/WhatWeDo/WhatWeDo";
import WhyChooseUs from "@/components/pages/HomePage/WhyChooseUs/WhyChooseUs";
import Container from "@/components/ui/Container";

const HomePage = () => {
  return (
    <Container>
      <Banner />

      <WhatWeDo />

      <WhyChooseUs />

      <StrategyMarketing />

      <Testimony />

      <Partner />

      <LetsJoin />
    </Container>
  );
};

export default HomePage;
