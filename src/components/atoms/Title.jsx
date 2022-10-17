import React from "react";

export const Title = ({className, value}) => {
  return (
    <>
      <h2 className={className}>
        <span className="bf-ui-rich-text">{value}</span>
      </h2>
    </>
  );
};
