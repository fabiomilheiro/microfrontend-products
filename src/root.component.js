import React from "react";

export default function Root(props) {
  return (
    <div>
      <div id="navbar"></div>
      <section>{props.name} is mounted!</section>
    </div>
  );
}
