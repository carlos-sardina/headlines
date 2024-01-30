'use client';
import { COUNTRIES_MAP } from '@constants';
import { usePathname, useSearchParams } from 'next/navigation';
import { Dropdown } from '../CountryDropdown/CountryDropdown';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const country = searchParams.get('country') ?? '';
  const currentCountry = Object.keys(COUNTRIES_MAP).includes(country)
    ? (country as keyof typeof COUNTRIES_MAP)
    : COUNTRIES_MAP.us.key;

  const changeCountry = (country: keyof typeof COUNTRIES_MAP) => {
    const params = new URLSearchParams(searchParams);
    params.set('country', country);
    router.push(`${pathName}?${params}`);
  };

  return (
    <header className="flex justify-between items-center p-6 pb-4">
      <div>
        <h1 className="text-main font-semibold text-3xl">Headline</h1>
        <p className="text-gray mt-1">Headlines for {COUNTRIES_MAP[currentCountry].label}</p>
      </div>
      <Dropdown currentCountry={currentCountry} onChange={(e) => changeCountry(e)} />
    </header>
  );
};
