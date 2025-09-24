import { http } from "../http";
import type { ICatalogueData } from "./type";

export const getCatalogueList = () => {
  return http.request<ICatalogueData>({
    url: "article/catalogue",
    method: "GET",
    isLoading: false,
  });
};
