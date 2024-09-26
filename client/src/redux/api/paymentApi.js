const { baseApi } = require("./baseApi");

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "/payment/create-payment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payment"],
    }),

    confirmPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/confirm-payment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payment"],
    }),

    getAllTransactions: builder.query({
      query: () => ({
        url: "/payment/transactions",
      }),
      providesTags: ["payment"],
    }),

    getSingleTransaction: builder.query({
      query: ({ email }) => ({
        url: `/payment/transactions/${email}`,
      }),
      providesTags: ["payment"],
    }),

    updateToSuccess: builder.mutation({
      query: (transactionsId) => ({
        url: `/payment/transactions/update-to-success/${transactionsId}`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useConfirmPaymentMutation,
  useGetAllTransactionsQuery,
  useGetSingleTransactionQuery,
  useUpdateToSuccessMutation,
} = paymentApi;
