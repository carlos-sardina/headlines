'use client';
import { CATEGORIES_MAP, COUNTRIES_MAP } from '@constants';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Dropdown } from '../CountryDropdown/CountryDropdown';
import { getCategoryParam, getCountryParam } from '@utils';

export const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentCountry = getCountryParam(searchParams);
  const currentCategory = getCategoryParam(searchParams);

  const changeCountry = (country: keyof typeof COUNTRIES_MAP) => {
    const params = new URLSearchParams(searchParams);
    params.set('country', country);
    params.delete('page');
    router.push(`${pathName}?${params}`);
  };

  const headlineSubTitle =
    currentCategory === CATEGORIES_MAP.all.key
      ? 'World Headlines'
      : 'Headlines for ' + COUNTRIES_MAP[currentCountry]?.label;

  return (
    <header className="flex justify-between items-center p-6 pb-4">
      <div>
        <h1 className="text-main font-semibold text-3xl">Headline</h1>
        <p className="text-gray mt-1">{headlineSubTitle}</p>
      </div>
      <Dropdown currentCountry={currentCountry} onChange={(e) => changeCountry(e)} />
    </header>
  );
};
