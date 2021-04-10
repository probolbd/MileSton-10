import React from "react";
import Event from "../Event/Event";

const events = [
  {
    name: "Child Support",
    pic: "animalShelter.png",
  },
  {
    name: "Child Support",
    pic: "animalShelter.png",
  },
];

const Home = () => {
  return (
    <div className="row">
      {events.map((event) => (
        <Event event />
      ))}
    </div>
  );
};

export default Home;
