import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://optionsdashboard.herokuapp.com/getoi";

const createRequest = (url) => ({ url });

export const optionsApi = createApi({
  reducerPath: "optionsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOi: builder.query({
      query: (name) => createRequest(`/${name}`),
    }),
  }),
});

export const { useGetOiQuery } = optionsApi;
