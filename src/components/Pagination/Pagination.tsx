'use client';
import { RESULTS_PER_PAGE } from '@constants';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

type Props = {
  total: number;
  currentPage: number;
};

export const Pagination = ({ total, currentPage }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const changePage = (page: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    router.push(`${pathName}?${params}`);
  };

  const peerPage = RESULTS_PER_PAGE;
  const totalPages = Math.ceil(total / peerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center w-full py-7">
      <ul className="flex gap-1">
        {pages.map((page) => (
          <li
            key={page}
            className={`${currentPage === page ? 'bg-main border-main text-white font-bold' : 'bg-white hover:bg-hover  border-gray'} border  rounded-lg`}
          >
            <button className="px-3 py-1" disabled={currentPage === page} onClick={() => changePage(page.toString())}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
