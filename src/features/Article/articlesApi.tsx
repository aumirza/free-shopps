import { API_ENDPOINTS } from "@/constants";
import { apiSlice } from "@/services/apiSlice";

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: API_ENDPOINTS.getArticle,
        method: "GET",
      }),
      providesTags: ["Articles"],
    }),
    createArticle: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.createArticle,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Articles"],
    }),
    updateArticle: builder.mutation({
      query: (data) => ({
        url: `${API_ENDPOINTS.updateArticle}/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Articles"],
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `${API_ENDPOINTS.deleteArticle}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Articles"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useUpdateArticleMutation,
  useCreateArticleMutation,
  useDeleteArticleMutation,
} = articlesApi;
