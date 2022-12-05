import React from "react";
import Club from "./Club";

const Result = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Club item={item}  key = {index}/>
      ))}
    </div>
  );
};

export default Result;
