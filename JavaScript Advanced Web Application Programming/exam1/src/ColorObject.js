import React from "react";

/* export default function Movie({ title, genre, duration }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, title),
    React.createElement("h2", {}, genre),
    React.createElement("h2", {}, duration),
  ]);
} */

const ColorObject = ({data}) => {
  return (
    <div>

      <p><strong>
        Color name: {data.colorName} &nbsp;
        Hex Code: {data.hexCode}
        </strong> </p>
    </div>
  );
};

export default ColorObject;
