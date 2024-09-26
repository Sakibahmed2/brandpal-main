import AboutHeader from "@/components/pages/AboutPage/AboutHeader/AboutHeader";
import AboutUsInfo from "@/components/pages/AboutPage/AboutUsInfo/AboutUsInfo";
import OurTeam from "@/components/pages/AboutPage/OurTeam/OurTeam";
import Container from "@/components/ui/Container";

const AboutUsPage = () => {
  return (
    <Container className="pt-32 pb-20">
      <AboutHeader />
      <AboutUsInfo />
      <OurTeam />
    </Container>
  );
};

export default AboutUsPage;
