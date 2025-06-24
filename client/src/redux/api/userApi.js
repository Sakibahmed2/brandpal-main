const { baseApi } = require("./baseApi");

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "/user",
      }),
    }),

    getSingleUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useGetSingleUserQuery } = userApi;
