import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetInfoTrasactionQuery } from "../../store/api/transactions/transactionApi";
import { CarMediaImage } from "../atoms/CardMediaImage";
import { DateFormat } from "../atoms/DateFormat";
import { LoadingSpinner } from "../atoms/LoadingSpinner";
import { StateBuy } from "../atoms/StateBuy";
import {Title} from "../atoms/Title"
import SubTitle from "../atoms/SubTitle";
import {Separator} from "../atoms/Separator"
import { ButtonMl } from "../atoms/ButtonMl";
import { DetailPay } from "../../pages/purcharse/DetailPay";

export const DetailBuy = () => {
  const { buy } = useSelector((state) => state.buys);
  const {data: transaction = {}, isLoading} = useGetInfoTrasactionQuery({
    shipmentId:buy.id_envio,
    paymentId:buy.id_transaccion
  });
  return (
    <div
      style={{
        margin: "30px 150px",
      }}
      >
      {isLoading && <LoadingSpinner />}
      {!isLoading &&
      <div
        id="app-root-wrapper"
        className="page-wrapper__content main-wrapper layout-container">
        <div className="main-container main-container--deep">
          <div className="bf-ui-context-with-ellipsis">
            <div className="bf-ui-context-with-ellipsis__text">
              <Title value={buy.titulo} />
              <SubTitle value={buy.cantidad + " Unidad"} />
            </div>

            <CarMediaImage image={buy.imagen} />
          </div>
          <div className="bf-ui-card bf-ui-card--no-padding bf-ui-card--elevated">
            <div className="feedback-container">
              <StateBuy
                value={buy.shipment?.estado}
                success={
                  buy.shipment?.estado === "entregado" ? "success" : "error"
                }
              />
              <DateFormat
                className={"feedback-container-title"}
                value={buy.fecha}
              />
              <Title
                classSubTitle={"feedback-container-title"}
                value={"Vendedor"}
              />
              <SubTitle value={buy.vendedor?.nickname} />
            </div>
            <Separator />
            <Link to={"/"}>
              <ButtonMl value="Volver a compra" />
            </Link>
          </div>
        </div>

        <div className="detail-container">
          <div className="detail-container bf-ui-ticket">
            <Title
              className={"bf-ui-ticket__title"}
              value={"Detalle de la compra"}
            />
            <DateFormat
              className={"bf-ui-ticket__subtitle"}
              value={buy.fecha}
            />
            <SubTitle
              classSubTitle={"bf-ui-ticket__subtitle"}
              value={"Id compra: #" + buy.id_compra}
            />
            <Separator />
            <DetailPay valueLeft={"Producto"} valueRight={buy.precio?.total} />
            <Separator />
            <DetailPay
              valueLeft={"Envío"}
              valueRight={"Gratis"}
              caseDetail={"state"}
              success={"success"}
            />
            <Separator />
            <DetailPay
              valueLeft={"Total"}
              valueRight={buy.cantidad + "x" + buy.precio?.total}
            />
            <DetailPay
              valueRight={"Pago aprobado"}
              caseDetail={"state"}
              success={"success"}
            />
          </div>
        </div>
      </div>
      }
    </div>
  );
};
