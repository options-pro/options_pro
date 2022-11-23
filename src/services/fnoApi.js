import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://fno-analysis.herokuapp.com/fno";

const createRequest = (url) => ({ url });

export const fnoApi = createApi({
  reducerPath: "fnoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFno: builder.query({
      query: () => createRequest(),
    }),
  }),
});

export const { useGetFnoQuery } = fnoApi;
