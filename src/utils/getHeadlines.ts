import { Headline, HeadlinesResponse } from '@types';
import { fetchHeadlines } from '@services';
import { CATEGORIES_MAP, COUNTRIES_MAP } from '@constants';

type GetHeadlinesProps = {
  country: keyof typeof COUNTRIES_MAP;
  category: keyof typeof CATEGORIES_MAP;
  page: number;
};

export const getHeadlines = async ({ country, category, page }: GetHeadlinesProps) => {
  let headlines: HeadlinesResponse | null = null;

  if (category === CATEGORIES_MAP.all.key) {
    const randomCountries = Object.keys(COUNTRIES_MAP)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    const headlinesPromises = randomCountries.map((randomCountry) =>
      fetchHeadlines({ country: randomCountry as keyof typeof COUNTRIES_MAP, categoryQuery: '', page: 1, count: 4 })
    );

    const headlinesResponses = await Promise.all(headlinesPromises);

    const headlinesArticles = headlinesResponses.reduce((acc, headlinesResponse) => {
      if (headlinesResponse.status === 'ok') {
        const articles = headlinesResponse.articles.map((article) => ({
          ...article,
          country: headlinesResponse.country
        }));
        return [...acc, ...articles];
      }
      return acc;
    }, [] as Headline[]);

    headlines = {
      status: 'ok',
      totalResults: null,
      articles: headlinesArticles.sort(() => 0.5 - Math.random())
    };
  } else {
    headlines = await fetchHeadlines({ country, categoryQuery: `&category=${category}`, page });
  }

  return headlines as HeadlinesResponse;
};
