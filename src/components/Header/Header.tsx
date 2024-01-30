'use client';
import { COUNTRIES_MAP } from '@constants';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export const Header = () => {
  const searchParams = useSearchParams();
  const currentCategory = (searchParams.get('country') as keyof typeof COUNTRIES_MAP) ?? COUNTRIES_MAP.us.key;
  const { key, label } = COUNTRIES_MAP[currentCategory];

  return (
    <header className="flex justify-between items-center p-6 pb-4">
      <div>
        <h1 className="text-main font-semibold text-3xl">Headlines</h1>
        <p className="text-gray">Today, February 23rd</p>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          className="w-[25px] h-[15px]"
          src={`https://flagcdn.com/${key}.svg`}
          alt={`${label} flag`}
          width={25}
          height={15}
        ></Image>
        <p>{key.toUpperCase()}</p>
      </div>
    </header>
  );
};
