import React from "react";

const Aboutus = (props) => {
  return (

    <div className="aboutUsMainContainer row">
      <div className="aboutUsImageContainer">
        <img src={props.image} alt="principalImage"
          className="principalImageStyle"
        />
      </div>
      <div className="aboutUsTextContainer" >
        <p className="principalContent" >
         {props.message}
        </p>
      </div>
    </div>

  );
};

export default Aboutus;

