export const CATEGORIES_MAP = {
  all: {
    key: 'all',
    label: 'All'
  },
  business: {
    key: 'business',
    label: 'Business'
  },
  entertainment: {
    key: 'entertainment',
    label: 'Entertainment'
  },
  general: {
    key: 'general',
    label: 'General'
  },
  health: {
    key: 'health',
    label: 'Health'
  },
  science: {
    key: 'science',
    label: 'Science'
  },
  sports: {
    key: 'sports',
    label: 'Sports'
  },
  technology: {
    key: 'technology',
    label: 'Technology'
  }
} as const;

export const COUNTRIES_MAP = {
  ae: {
    key: 'ae',
    label: 'United Arab Emirates'
  },
  ar: {
    key: 'ar',
    label: 'Argentina'
  },
  at: {
    key: 'at',
    label: 'Austria'
  },
  au: {
    key: 'au',
    label: 'Australia'
  },
  be: {
    key: 'be',
    label: 'Belgium'
  },
  bg: {
    key: 'bg',
    label: 'Bulgaria'
  },
  br: {
    key: 'br',
    label: 'Brazil'
  },
  ca: {
    key: 'ca',
    label: 'Canada'
  },
  ch: {
    key: 'ch',
    label: 'Switzerland'
  },
  cn: {
    key: 'cn',
    label: 'China'
  },
  co: {
    key: 'co',
    label: 'Colombia'
  },
  cu: {
    key: 'cu',
    label: 'Cuba'
  },
  cz: {
    key: 'cz',
    label: 'Czech Republic'
  },
  de: {
    key: 'de',
    label: 'Germany'
  },
  eg: {
    key: 'eg',
    label: 'Egypt'
  },
  fr: {
    key: 'fr',
    label: 'France'
  },
  gb: {
    key: 'gb',
    label: 'United Kingdom'
  },
  gr: {
    key: 'gr',
    label: 'Greece'
  },
  hk: {
    key: 'hk',
    label: 'Hong Kong'
  },
  hu: {
    key: 'hu',
    label: 'Hungary'
  },
  id: {
    key: 'id',
    label: 'Indonesia'
  },
  ie: {
    key: 'ie',
    label: 'Ireland'
  },
  il: {
    key: 'il',
    label: 'Israel'
  },
  in: {
    key: 'in',
    label: 'India'
  },
  it: {
    key: 'it',
    label: 'Italy'
  },
  jp: {
    key: 'jp',
    label: 'Japan'
  },
  kr: {
    key: 'kr',
    label: 'Korea'
  },
  lt: {
    key: 'lt',
    label: 'Lithuania'
  },
  lv: {
    key: 'lv',
    label: 'Latvia'
  },
  ma: {
    key: 'ma',
    label: 'Morocco'
  },
  mx: {
    key: 'mx',
    label: 'México'
  },
  my: {
    key: 'my',
    label: 'Malaysia'
  },
  ng: {
    key: 'ng',
    label: 'Nigeria'
  },
  nl: {
    key: 'nl',
    label: 'Netherlands'
  },
  no: {
    key: 'no',
    label: 'Norway'
  },
  nz: {
    key: 'nz',
    label: 'New Zealand'
  },
  ph: {
    key: 'ph',
    label: 'Philippines'
  },
  pl: {
    key: 'pl',
    label: 'Poland'
  },
  pt: {
    key: 'pt',
    label: 'Portugal'
  },
  ro: {
    key: 'ro',
    label: 'Romania'
  },
  rs: {
    key: 'rs',
    label: 'Serbia'
  },
  ru: {
    key: 'ru',
    label: 'Russia'
  },
  sa: {
    key: 'sa',
    label: 'Saudi Arabia'
  },
  se: {
    key: 'se',
    label: 'Sweden'
  },
  sg: {
    key: 'sg',
    label: 'Singapore'
  },
  si: {
    key: 'si',
    label: 'Slovenia'
  },
  sk: {
    key: 'sk',
    label: 'Slovakia'
  },
  th: {
    key: 'th',
    label: 'Thailand'
  },
  tr: {
    key: 'tr',
    label: 'Turkey'
  },
  tw: {
    key: 'tw',
    label: 'Taiwan'
  },
  ua: {
    key: 'ua',
    label: 'Ukraine'
  },
  us: {
    key: 'us',
    label: 'United States'
  },
  ve: {
    key: 've',
    label: 'Venezuela'
  },
  za: {
    key: 'za',
    label: 'South Africa'
  }
} as const;

export const DEFAULT_COUNTRY = COUNTRIES_MAP.us.key as keyof typeof COUNTRIES_MAP;
export const DEFAULT_CATEGORY = CATEGORIES_MAP.all.key as keyof typeof CATEGORIES_MAP;
