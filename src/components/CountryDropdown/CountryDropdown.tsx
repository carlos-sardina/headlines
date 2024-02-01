'use client';
import { COUNTRIES_MAP } from '@constants';
import { useEffect, useRef, useState } from 'react';
import { CountryItem } from './CountryItem';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

type Props = {
  currentCountry: keyof typeof COUNTRIES_MAP;
  onChange: (country: keyof typeof COUNTRIES_MAP) => void;
};

export const Dropdown = ({ currentCountry, onChange }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const countries = Object.values(COUNTRIES_MAP);
  const country = COUNTRIES_MAP[currentCountry];
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        aria-expanded={isOpened}
        className="h-[40px] rounded-lg border-gray border flex items-center gap-2 w-[100px] justify-center"
        ref={buttonRef}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <div className="flex items-center gap-1">
          <CountryItem country={country} />
          {isOpened ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
        </div>
      </button>
      {isOpened ? (
        <ul
          ref={dropdownRef}
          className={
            'mt-[40px] absolute top-0 right-0 bg-white shadow-md rounded-md overflow-y-auto overflow-x-hidden w-[100px] h-[300px]'
          }
        >
          {countries.map((country) => (
            <li
              key={country.key}
              className={`${currentCountry === country.key ? 'bg-main text-white' : 'bg-white hover:bg-hover'} flex items-center p-2 cursor-pointer`}
              onClick={() => {
                onChange(country.key);
                setIsOpened(false);
              }}
            >
              <CountryItem country={country} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
