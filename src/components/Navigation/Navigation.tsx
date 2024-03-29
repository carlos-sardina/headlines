'use client';
import { CATEGORIES_MAP } from '@constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getCategoryParam } from '@utils';

export const Navigation = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = getCategoryParam(searchParams);

  const changeCategory = (category: keyof typeof CATEGORIES_MAP) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', category);
    params.delete('page');
    router.push(`${pathName}?${params}`);
  };

  return (
    <nav>
      <ul className="flex gap-y-2 gap-x-4 flex-wrap px-6">
        {Object.values(CATEGORIES_MAP).map((category) => (
          <li
            key={category.key}
            className={`text-black hover:cursor-pointer border-b-4 ${currentCategory === category.key ? 'border-b-main font-semibold text-main' : 'border-b-transparent'}`}
          >
            <button onClick={() => changeCategory(category.key)}>{category.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
