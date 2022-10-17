import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPurcharseSingleQuery } from "../../store/api";
import { ButtonMl } from "../atoms/ButtonMl";
import { CarMediaImage } from "../atoms/CardMediaImage";
import { CardHeader } from "../molecules/CardHeader";
import { ListItemData } from "../molecules/ListItemData";
import { LoadingSpinner } from "../atoms/LoadingSpinner";
import { Pagination, Stack } from "@mui/material";
import { setBuy } from "../../store/slices/buys/buysSlices";
import { Link, useNavigate } from "react-router-dom";

export const CardBuyDescription = () => {
  const [page, setPage] = useState(1);
  const { data: purcharses, isFetching } = useGetPurcharseSingleQuery(page);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { buy } = useSelector((state) => state.buys);
  const dispatch = useDispatch();

  const setPurcharse = (purcharse) => {
    dispatch(setBuy(purcharse));
  };

  return (
    <>
      <div key="list-item-container" className="list-item-container">
        {isFetching && <LoadingSpinner />}
        {!isFetching &&
          purcharses &&
          purcharses.data &&
          purcharses.data.map((purcharse) => (
            <div key={purcharse.id_compra} className="list-item-grouper">
              <CardHeader date={purcharse.fecha}></CardHeader>
              <div className="list-item">
                <div className="list-item__product">
                  <CarMediaImage image={purcharse.imagen}></CarMediaImage>
                  <ListItemData purcharse={purcharse}></ListItemData>
                </div>
                <Link className="bf-ui-button-container" to={"/buy-detail"}>
                  <ButtonMl
                    value={"Ver Compras"}
                    onClick={() => setPurcharse(purcharse)}
                  ></ButtonMl>
                </Link>
              </div>
            </div>
          ))}
        <Stack spacing={2}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </>
  );
};
