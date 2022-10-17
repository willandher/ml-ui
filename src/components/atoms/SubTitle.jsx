import React from "react";

export default function SubTitle({ value, classSubTitle }) {
  return (
    <p className={classSubTitle}>
      <span className="bf-ui-rich-text">{value}</span>
    </p>
  );
}
