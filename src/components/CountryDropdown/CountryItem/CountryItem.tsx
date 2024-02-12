import { COUNTRIES_MAP } from '@constants';
import Image from 'next/image';

type ItemProps = {
  country: (typeof COUNTRIES_MAP)[keyof typeof COUNTRIES_MAP];
};

export const CountryItem = ({ country }: ItemProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image
        className="w-[25px] h-[15px]"
        src={`https://flagcdn.com/${country?.key}.svg`}
        alt={`${country?.label} flag`}
        width={25}
        height={15}
      ></Image>
      <p>{country?.key.toUpperCase()}</p>
    </div>
  );
};
