/**
 * Request
 */

export interface List {
  category_code?: string;
  category_id?: string;
  category_name?: string;
  create_date?: string;
  creator_id?: number;
  creator_name?: string;
  description?: string;
  modifier?: null;
  status?: number;
  update_date?: string;
}

export interface ICategoryData {
  list: List[];
  total: number;
}

export interface ICategoryTags {
  id: number;
  category_name?: string;
  tags: {
    id: number;
    tag_name: string;
  }[]
}
