const { baseApi } = require("./baseApi");

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (service) => ({
        url: `/services`,
        method: "POST",
        body: service,
      }),
      invalidatesTags: ["service"],
    }),

    getAllServices: builder.query({
      query: ({ userId }) => ({
        url: `/services`,
        params: userId && { userId },
      }),
      providesTags: ["service"],
    }),

    getSingleService: builder.query({
      query: (id) => `/services/${id}`,
      providesTags: ["service"],
    }),

    updateService: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["service"],
    }),

    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useUpdateServiceMutation,
  useGetSingleServiceQuery,
  useDeleteServiceMutation,
} = serviceApi;
