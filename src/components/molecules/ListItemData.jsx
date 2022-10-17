import React from "react";
import { StateBuy } from "../atoms/StateBuy";
import SubTitle from "../atoms/SubTitle";
import { DateFormat } from "../atoms/DateFormat";

export const ListItemData = ({ purcharse }) => {
  return (
    <div className="list-item__data">
      <StateBuy value={purcharse.shipment.estado}/>
      <h3 className="list-item__title">
          <DateFormat value={purcharse.fecha} className={'bf-ui-rich-text'}/>
        </h3>
      <SubTitle
        value={purcharse.titulo}
        classSubTitle={"list-item__link"}
      />
      <SubTitle
        value={"unidad |" + purcharse.cantidad}
        classSubTitle={"list-item__info"}
      />
    </div>
  );
};
