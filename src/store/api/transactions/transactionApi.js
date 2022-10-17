import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionApi = createApi({
  reducerPath: "transactions",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9016/api/ml/v1/bff",
  }),
  endpoints: (builder) => ({
    getInfoTrasaction: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          console.log(_arg);
          const shipment = await fetchWithBQ(`./shipments/${_arg.shipmentId}`)
          if (shipment.error) return { error: shipment.error }
        const payment = await fetchWithBQ(`./payments/${_arg.paymentId}`)
        
        return payment.data ? { data: {
            payment: payment.data,
            shipment: shipment.data
        } } : { error: result.error }
      }
    })
  }),
});

export const { useGetInfoTrasactionQuery } = transactionApi;