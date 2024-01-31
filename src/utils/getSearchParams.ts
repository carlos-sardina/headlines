import { CATEGORIES_MAP, COUNTRIES_MAP, DEFAULT_CATEGORY, DEFAULT_COUNTRY } from '@constants';

type GetSearchParamsProps<T> = {
  searchParams: URLSearchParams;
  param: string;
  defaultValue: T;
  possibleOptions: Array<T>;
};

const getSearchParamsValue = <T>({ searchParams, param, defaultValue, possibleOptions }: GetSearchParamsProps<T>) => {
  const value = (searchParams.get(param) ?? '') as T;
  return possibleOptions.includes(value) ? value : defaultValue;
};

export const getCountryParam = (params: URLSearchParams) => {
  return getSearchParamsValue<keyof typeof COUNTRIES_MAP>({
    searchParams: params,
    param: 'country',
    defaultValue: DEFAULT_COUNTRY,
    possibleOptions: Object.keys(COUNTRIES_MAP) as Array<keyof typeof COUNTRIES_MAP>
  });
};

export const getCategoryParam = (params: URLSearchParams) => {
  return getSearchParamsValue<keyof typeof CATEGORIES_MAP>({
    searchParams: params,
    param: 'category',
    defaultValue: DEFAULT_CATEGORY,
    possibleOptions: Object.keys(CATEGORIES_MAP) as Array<keyof typeof CATEGORIES_MAP>
  });
};

export const getPageParam = (params: URLSearchParams) => {
  const page = params.get('page');
  return page && !isNaN(Number(page)) ? Number(page) : 1;
};
