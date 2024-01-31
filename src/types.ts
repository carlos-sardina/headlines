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
};

export type HeadlinesResponse = {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Headline[];
};
