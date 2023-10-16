import React from "react";

const Badget = ({ barTitle, badgetTitle }) => {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {barTitle}:
      {badgetTitle.map((badge) => (
        <p
          className={`badge ${
            barTitle === "Categories"
              ? "bg-primary"
              : barTitle === "Languages"
              ? "bg-danger"
              : barTitle === "Production Companies"
              ? "bg-success"
              : null
          }`}
        >
          {badge.name}
        </p>
      ))}
    </div>
  );
};

export default Badget;
