import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/ml/v1/bff",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `./users/${id}`,
    }),
    getPurcharseByUserId: builder.query({
      query: (id,offset) => `./users/${id}/purcharses/?limit=10&offset=0`
    }),
    getPurcharseSingle: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        let userId = localStorage.getItem("userId");
        
        if(!userId){
          const randomResult = await fetchWithBQ('./users/1')
          if (randomResult.error) return { error: randomResult.error }
          const user = randomResult.data
          localStorage.setItem("userId", user.id)
          userId = user.id;
        }
        const offset = parseInt(_arg) - 1;        

        const result = await fetchWithBQ(`./users/${userId}/purcharses/?limit=5&offset=${offset}`)
        return result.data ? { data: result.data } : { error: result.error }
      }
    })
  }),
});

export const { useGetUserQuery, useGetPurcharseByUserIdQuery, useGetPurcharseSingleQuery  } = userApi;

