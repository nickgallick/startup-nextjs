import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Uber Kiwi LLC is an innovative internet-based startup company dedicated to creating niche-based content-driven websites that serve as a vital bridge between businesses and consumers. Our primary goal is to bring consumers to businesses within specific niches while generating revenue primarily through ad and affiliate network monetization."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
