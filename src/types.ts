import { COUNTRIES_MAP } from '@constants';

export type Headline = {
  source: {
    id?: string;
    name?: string;
  };
  author?: string;
  title: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
  country?: keyof typeof COUNTRIES_MAP;
};

export type HeadlinesResponse = {
  status: 'ok' | 'error';
  totalResults: number | null;
  articles: Headline[];
  country?: keyof typeof COUNTRIES_MAP;
};
