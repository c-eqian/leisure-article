export type CatalogueList = {
  category_id: number;
  category_name: string;
  article_count: number;
};

export type ICatalogueData = {
  list: CatalogueList[];
  total: number;
};
