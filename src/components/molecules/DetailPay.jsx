import React from "react";
import { StateBuy } from "../atoms/StateBuy";
import SubTitle from "../atoms/SubTitle";

export const DetailPay = ({ valueLeft, valueRight, caseDetail, success }) => {
  return (
    <div className="bf-ui-ticket-row">
      <SubTitle
        classSubTitle={"bf-ui-ticket-row__left-column--primary-text"}
        value={valueLeft}
      />
      {caseDetail === "state" ? (
        <StateBuy  value={valueRight} success={success}/>
      ) : (
        <SubTitle
          classSubTitle={"bf-ui-ticket-row__right-column--primary-text"}
          value={valueRight}
        />
      )}
    </div>
  );
};
