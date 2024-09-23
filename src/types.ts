export interface IImage {
  id: string;
  urls: {
    raw: string;
    full: string;
  };
  description?: string | null;
  alt_description?: string;
  blur_hash?: string | null;
  width: number;
  height: number;
  user: {
    profile_image: {
      small: string;
    };
    first_name: string;
    last_name: string;
    username: string;
  };
  created_at: string;
}

export interface ILayoutData {
  IMAGE_WIDTH_3COLUMNS: number;
  IMAGE_WIDTH_2COLUMNS: number;
  IMAGE_WIDTH_1COLUMN: number;

  COLUMN_HEIGHT: number;
  ROW_GAP: number;
  COLUMN_GAP: number;

  SCREEN_WIDTH_3COLUMNS: number;
  SCREEN_WIDTH_2COLUMNS: number;
  SCREEN_WIDTH_1COLUMN: number;

  HEADER_HEIGHT: number;

  FULL_MODAL_SCREEN_WIDTH: string;
}

export interface ApiEndpoints {
  Photos: string;
  Page: string;
  PerPage: string;
  Search: string;
  OrderBy: string;
  Query: string;
}
