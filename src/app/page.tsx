import { Headline, Pagination } from '@components';
import { CATEGORIES_MAP, COUNTRIES_MAP } from '@constants';
import { getCategoryParam, getCountryParam, getPageParam, getHeadlines } from '@utils';
import { Metadata } from 'next';

type Props = {
  searchParams: URLSearchParams;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = new URLSearchParams(searchParams);
  const country = getCountryParam(params);
  const countryLabel = COUNTRIES_MAP[country].label;
  const category = getCategoryParam(params);
  const categoryLabel = category === CATEGORIES_MAP.all.key ? '' : CATEGORIES_MAP[category].label;

  return {
    title: `Headlines - Latest ${categoryLabel} News from ${countryLabel}`,
    description: `Stay updated with the latest ${categoryLabel.toLowerCase()} news from ${countryLabel}`,
    openGraph: {
      title: `Headlines - Latest ${categoryLabel} News from ${countryLabel}`,
      description: `Stay updated with the latest ${categoryLabel.toLowerCase()} news from ${countryLabel}`
    }
  };
}

export default async function Home({ searchParams }: Props) {
  const params = new URLSearchParams(searchParams);
  const country = getCountryParam(params);
  const category = getCategoryParam(params);
  const page = getPageParam(params);
  const headlines = await getHeadlines({ country, category, page });

  if (headlines.status === 'error' || headlines.articles.length === 0) {
    return (
      <main className="flex flex-1 items-center justify-center p-10 text-center">
        <p className="text-gray font-semibold text-lg">
          There was an error fetching the headlines, please try again later.
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-wrap mt-1 flex-1 overflow-x-auto">
      {headlines.articles.map((headline) => (
        <Headline key={headline.title} headline={headline} />
      ))}
      {headlines.totalResults ? <Pagination total={headlines.totalResults} currentPage={page} /> : null}
    </main>
  );
}
