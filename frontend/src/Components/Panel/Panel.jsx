import React from "react";

const Panel = ({ title, icon }) => {
  return (
    <section>
      <div className="panel__naviget">
        <h2 className="panel__title">{title}</h2>
        <p className="panel__icon">{icon}</p>
      </div>
    </section>
  );
};

export default Panel;
