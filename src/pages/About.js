import React from "react";
import Navbar from "../navbar";
import Aboutus from "../Aboutus";
import Footer from "../Footer";
import HowItWorks from "../HowItWorks";
import principal from "../principal.jpeg";
import school from "../school.jpeg";

const About = () => {
  return (
    <>
      <Navbar />
      <HowItWorks message="About Principal" />
      <Aboutus
        image={principal}
        message="The chair of principal is being held by mrs.nita Singh bais ,she is highly educated and active adminstrator.
      She works diligently to ensure that her teachers are equipped to be leaders in the classroom.
      She takes initiatives to frame and redirect the development at school level"
      />

      <HowItWorks message="About School" />
      <Aboutus
        image={school}
        message="Nav Bharti Inter College, Khera is an Indian minority school established by Late Mr. Mahendra Singh Gahlot in 1960. The School is recognized by the Directorate of Education,  and is affiliated to the State Board of Education."
      />

      <HowItWorks message="Features of School" />
      <Aboutus
        image={school}
        message="
      High Secondary School ,
Uttar Pradesh Board of High School and Intermediate Education ,
Private School ,
Co-Educational School.

      "
      />

      <Footer />
    </>
  );
};

export default About;
