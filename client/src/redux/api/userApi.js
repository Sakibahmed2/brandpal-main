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

    claimOffer: builder.mutation({
      query: ({ userId, offerName }) => ({
        url: `/user/claim-offer/${userId}`,
        method: "PUT",
        body: { offerName },
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useClaimOfferMutation,
} = userApi;
