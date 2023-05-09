import React from "react";

function Random({ min, max }) {
  return (
    <div>
      <span>
        Random value between {min} and {max} = {Math.floor(Math.random() * max)}
      </span>
    </div>
  );
}

export default Random;
