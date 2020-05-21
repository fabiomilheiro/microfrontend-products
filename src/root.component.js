import React from "react";
import { Navbar } from "@fabio-milheiro/navbar";

export default function Root(props) {
  return (
    <div>
      <Navbar />
      <section>{props.name} is mounted!</section>
    </div>
  );
}
