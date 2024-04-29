export interface CatalogueList {
    category_id: number;
    category_name: string;
    article_count: number;
}

export interface ICatalogueData {
    list: CatalogueList[];
    total: number;
}
