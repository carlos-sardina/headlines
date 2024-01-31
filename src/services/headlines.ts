import { CATEGORIES_MAP, COUNTRIES_MAP, RESULTS_PER_PAGE } from '@constants';
import { HeadlinesResponse } from '@types';

type GetHeadlinesProps = {
  country: keyof typeof COUNTRIES_MAP;
  category: keyof typeof CATEGORIES_MAP;
  page: number;
};

export const getHeadlines = async ({ country, category, page }: GetHeadlinesProps) => {
  const categoryQuery = category === CATEGORIES_MAP.all.key ? '' : `&category=${category}`;

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${RESULTS_PER_PAGE}&page=${page}${categoryQuery}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    { next: { revalidate: 300 } }
  );
  const data = await response.json();
  return data as HeadlinesResponse;
};
