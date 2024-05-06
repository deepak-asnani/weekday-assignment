import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, FETCH_JOBS_URL, FETCH_JOBS_BODY } from "../constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ({
        limit = FETCH_JOBS_BODY.DEFAULT_LIMIT,
        offset = FETCH_JOBS_BODY.DEFAULT_OFFSET,
      }) => ({
        url: FETCH_JOBS_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          limit,
          offset,
        },
      }),
      serializeQueryArgs: (data) => {
        return data.endpointName
      },
      merge: (currentCache, newItems) => {

        currentCache.jdList.push(...newItems.jdList)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ['Jobs'],
    }),
  }),
});

export const { useGetJobsQuery } = api;
