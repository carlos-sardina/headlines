import { Headline } from '@components';

type Props = {
  searchParams: URLSearchParams;
};

export default function Home({ searchParams }: Props) {
  const params = new URLSearchParams(searchParams);

  return (
    <>
      <main className="flex flex-wrap mt-1">
        <Headline />
        <Headline />
        <Headline />
        <Headline />
        <Headline />
      </main>
    </>
  );
}
