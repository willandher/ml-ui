import React from "react";

export const StateBuy = ({ value, success }) => {
  return (
    <p className="list-item__intro">
    <span
      className={
        success === "success"
          ? "bf-ui-rich-text bf-ui-rich-text--success"
          : "bf-ui-rich-text bf-ui-rich-text--error"
      }
    >
      {value}
    </span>
  </p>
  );
};
