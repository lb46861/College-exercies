import React from "react";

/* export default function Movie({ title, genre, duration }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, title),
    React.createElement("h2", {}, genre),
    React.createElement("h2", {}, duration),
  ]);
} */

const Club = (props) => {
  return (
    <div>
      <h1> {props.item.name}</h1>
    </div>
  );
};

export default Club;
