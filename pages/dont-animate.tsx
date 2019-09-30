import React, { useState } from "react";
import Indicator from "../components/Indicator";

const DontAnimate = () => {
  return (
    <>
      <Indicator animate={false} />
      <div>
        <div className="block">1</div>
        <div className="block">2</div>
        <div className="block">3</div>
        <div className="block">4</div>
        <div className="block">5</div>
        <div className="block">6</div>
        <div className="block">7</div>
      </div>
    </>
  );
};

export default DontAnimate;
