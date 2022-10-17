import React from "react";
import { ProfileContent } from "../atoms/ProfileContent";

export const InfoProfileCard = ({ byGroup }) => {
  return (
    <div key={'info-profile'} className="andes-card andes-card--flat profile-card">
      {byGroup.map((element) => (
        <div key={element[0]} className="field-value field-value--button">
          <div className=" field-value__group">
            {element.values.map((value) => (
              <ProfileContent key={element[0]} value={value} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
