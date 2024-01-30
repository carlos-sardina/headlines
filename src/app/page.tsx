type Props = {
  searchParams: URLSearchParams;
};

export default function Home({ searchParams }: Props) {
  const params = new URLSearchParams(searchParams);
  console.log(params);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>hi app</h2>
      </main>
    </>
  );
}
