import React, { useState } from "react";
const HowItWorks = (props) => {
  return (
    <>
      <section style={{marginBottom:20, marginTop:20}} >
        <div className="container">
          <h1 className="main-heading text-center">{props.message}</h1>
         
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
