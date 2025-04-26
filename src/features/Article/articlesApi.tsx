import { API_ENDPOINTS } from "@/constants";
import { apiSlice } from "@/services/apiSlice";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: API_ENDPOINTS.getArticle,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
