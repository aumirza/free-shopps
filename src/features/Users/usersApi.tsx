import { API_ENDPOINTS } from "@/constants";
import { apiSlice } from "@/services/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: API_ENDPOINTS.getAllUsers,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
