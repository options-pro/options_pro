import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://futures-dashboard-api.herokuapp.com";

const createRequest = (url) => ({ url });

export const futuresApi = createApi({
  reducerPath: "futuresApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTopOiLosers: builder.query({
      query: () => createRequest("/toi/losers"),
    }),
    getTopOiGainers: builder.query({
      query: () => createRequest("/toi/gainers"),
    }),
    getTopLongBuildUp: builder.query({
      query: () => createRequest("/tlb"),
    }),
    getTopLongCover: builder.query({
      query: () => createRequest("/tlc"),
    }),
    getShortLongBuildUp: builder.query({
      query: () => createRequest("/tsb"),
    }),
    getTopShortCover: builder.query({
      query: () => createRequest("/tsc"),
    }),
  }),
});

export const {
  useGetTopOiLosersQuery,
  useGetTopOiGainersQuery,
  useGetShortLongBuildUpQuery,
  useGetTopLongBuildUpQuery,
  useGetTopLongCoverQuery,
  useGetTopShortCoverQuery,
} = futuresApi;
