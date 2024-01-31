import { CATEGORIES_MAP, COUNTRIES_MAP } from '@constants';
import { HeadlinesResponse } from '@types';

type GetHeadlinesProps = {
  country: keyof typeof COUNTRIES_MAP;
  category: keyof typeof CATEGORIES_MAP;
  page: number;
};

export const getHeadlines = async ({ country, category, page }: GetHeadlinesProps) => {
  const categoryQuery = category === CATEGORIES_MAP.all.key ? '' : `&category=${category}`;

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}${categoryQuery}&apiKey=38ad305e5baa42559b4b44a3101bcb07`,
    { next: { revalidate: 300 } }
  );
  const data = await response.json();
  return data as HeadlinesResponse;
};