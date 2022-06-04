import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import school from "./school.jpeg";
import principal from "./principal.jpeg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />

      <HowItWorks message="About School" />
      <Aboutus
        image={school}
        message={
          " Nav Bharti Inter College, Khera is an Indian minority school established by Late Mr. Mahendra Singh Gahlot in 1960. The School is recognized by the Directorate of Education,  and is affiliated to the State Board of Education."
        }
      />

      <HowItWorks message="Principal's Message" />
      <Aboutus
        image={principal}
        message={
          " Dear Friends,  Nav Bhati Inter College, Khera has a rich tradition of serving the nation in a distinguished way. I am proud to be a part of it. I am sure each individual associated with the school feels so. We immensely value our tradition, imbibe values and learn lessons from it. Human beings are meaning seekers. Only those who have the sense of history are able to go beyond it. I deem that our common history and heritage beckons us, to march forward beyond the known horizons"
        }
      />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
