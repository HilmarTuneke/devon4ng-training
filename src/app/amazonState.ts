export interface Rating {
  stars: number;
  count: number;
}

export interface Item {
  imageUrl: string;
  name: string;
  price: number;
  seller: string;
  rating: Rating;
  hasPrime: boolean;
}

export enum SortCriterion {
  Relevance, PriceUp, PriceDown, Rating
}

export interface MainCategory {
  name: string;
  subCategories: string[];
}

export interface AmazonState {
  isLoading: boolean;
  account: {
    name: string;
    email: string;
    isPrime: boolean;
  } | null;
  currentSearch: string;
  searchResult: {
    results: Item[];
    firstItemIndex: number;
    totalCount: number;
  };
  sortCriterion: SortCriterion;
  mainCategories: MainCategory[];
  shoppingCart: {
    totalAmount: number;
    items: Item[];
  };
}
