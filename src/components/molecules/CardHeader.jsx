import React from "react";
import { DateFormat } from "../atoms/DateFormat";

export const CardHeader = ({ date }) => {
  return (
    <div className="list-item-grouper__header">
      <span className="list-item-grouper__text">
        <DateFormat value={date} className = {'bf-ui-rich-text'} />
      </span>
    </div>
  );
};
