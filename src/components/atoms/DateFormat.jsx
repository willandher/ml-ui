import React from "react";

export const DateFormat = ({ value, className }) => {
  const monthNames = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const dateFormat = (dateString) => {
    const d = new Date(dateString);
    return d.getDate().toString().concat(" de ", monthNames[d.getMonth()]);
  };

  return (
      <span className={className}>
        {dateFormat(value)}
      </span>
  );
};
