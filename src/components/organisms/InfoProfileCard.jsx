import React from "react";
import { ProfileContent } from "../atoms/ProfileContent";

export const InfoProfileCard = ({ byGroup }) => {
  return (
    <div key={'info-profile'} className="andes-card andes-card--flat profile-card">
      {byGroup.map((element, index) => (
        <div key={index} className="field-value field-value--button">
          <div className=" field-value__group">
            {element.values.map((value,index) => (
              <ProfileContent key={index} value={value} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
