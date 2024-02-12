import { COUNTRIES_MAP, RESULTS_PER_PAGE } from '@constants';
import { HeadlinesResponse } from '@types';

type FetchHeadlinesProps = {
  country: keyof typeof COUNTRIES_MAP;
  categoryQuery: string;
  page: number;
  count?: number;
};

export const fetchHeadlines = async ({
  country,
  categoryQuery,
  page,
  count = RESULTS_PER_PAGE
}: FetchHeadlinesProps) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${count}&page=${page}${categoryQuery}&apiKey=${process.env.NEWS_API_KEY}`,
    { cache: 'no-cache' }
  );
  const data = await response.json();
  return { ...data, country } as HeadlinesResponse;
};
