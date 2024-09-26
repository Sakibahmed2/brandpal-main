import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <>
      <p className="text-xl text-primary">{title}</p>
      <h3 className="text-2xl md:text-4xl font-semibold">{description}</h3>
    </>
  );
};

export default SectionTitle;
