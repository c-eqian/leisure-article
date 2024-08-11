export interface UseInfo {
  username: string;
  avatar: string;
  user_id: number;
}

export interface List {
  id: number;
  images: string;
  user_info: UseInfo;
  uid: string;
  description?: any;
  modifier?: any;
  update_date: string;
  create_date: string;
  status: number;
  daily_content: string;
  country?: any;
  province?: any;
  city?: any;
  district?: any;
  creator: number;
}

export interface Data {
  total: number;
  list: List[];
  is_more: number;
}

export interface DailyRes {
  code: number;
  successful: string;
  msg: string;
  data: Data;
}
