interface ApiEndpoints {
  Photos: string;
  Page: string;
  PerPage: string;
  Search: string;
  OrderBy: string;
  Query: string;
}

const apiEndpoints: ApiEndpoints = {
  Photos: 'photos',
  Page: 'page',
  PerPage: 'per_page',
  Search: 'search',
  OrderBy: 'order_by',
  Query: 'query',
};

export default { api: apiEndpoints };
