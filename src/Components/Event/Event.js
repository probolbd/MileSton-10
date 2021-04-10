import React from "react";
import { useEffect, useState } from "react";

const Event = ({ event }) => {
  return (
    <div className="col-md-3">
      <ul>
        {/* <img
          style={{ height: "300px" }}
          src={require(`../../../images/${event.pic}`)}
          alt=""
        /> */}
        <h3>{event.name}</h3>
      </ul>
    </div>
  );
};

export default Event;
