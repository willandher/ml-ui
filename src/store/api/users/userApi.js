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
    getUserResctrictions: builder.query({
      query:(id) => `./users/${id}/restrictions`
    }),
    getPurcharseByUserId: builder.query({
      query: (id,offset) => `./users/${id}/purcharses/?limit=10&offset=0`
    }),
    getPurcharseSingle: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        let user =  JSON.parse(localStorage.getItem("user")) ;
        if(!user){
          const randomResult = await fetchWithBQ('./users/1')
          if (randomResult.error) return { error: randomResult.error }
          const userResult = randomResult.data
          localStorage.setItem("user", JSON.stringify(userResult))
          user = userResult;
        }
        const offset = parseInt(_arg) - 1;
        const result = await fetchWithBQ(`./users/${user.id}/purcharses/?limit=5&offset=${offset}`)
        return result.data ? { data: result.data } : { error: result.error }
      }
    })
  }),
});

export const { useGetUserQuery, useGetPurcharseByUserIdQuery, useGetPurcharseSingleQuery, useGetUserResctrictionsQuery  } = userApi;

