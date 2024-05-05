import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, FETCH_JOBS_URL } from '../constants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => ({
        url: FETCH_JOBS_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          limit: 10,
          offset: 0,
        },
      }),
    }),
  }),
});

export const { useGetJobsQuery } = api;
