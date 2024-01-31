import { Headline, Pagination } from '@components';
import { getHeadlines } from '@services';
import { getCategoryParam, getCountryParam, getPageParam } from '@utils';

type Props = {
  searchParams: URLSearchParams;
};

export default async function Home({ searchParams }: Props) {
  const params = new URLSearchParams(searchParams);
  const country = getCountryParam(params);
  const category = getCategoryParam(params);
  const page = getPageParam(params);
  const headlines = await getHeadlines({ country, category, page });

  if (headlines.status === 'error') {
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
      <Pagination />
    </main>
  );
}
