import WEEKDAY_ICONS from "./icons/icons";
export const BASE_URL = "https://api.weekday.technology";

export const FETCH_JOBS_URL = "/adhoc/getSampleJdJSON";

export const CURRENCY_ICONS = {
  USD: WEEKDAY_ICONS.AttachMoneyRoundedIcon,
  INR: WEEKDAY_ICONS.CurrencyRupeeRoundedIcon,
};

export const FETCH_JOBS_BODY = {
  DEFAULT_LIMIT: 20,
  DEFAULT_OFFSET: 0,
};

export const FILTER_TYPES = {
  ROLES: {key: 'roles', name: 'Roles'},
  EXPERIENCE: {key: 'experience', name: 'Experience'},
  MODE: {key: 'mode', name: 'Mode'},
  MINIMUM_BASE_PAY: {key: 'minimumBasePay', name: 'Minimum Base Pay'},
};

export const JOB_ROLES = {
  Engineering: [
    "Backend",
    "Frontend",
    "Fullstack",
    "IOS",
    "Flutter",
    "React Native",
    "Android",
    "Tech Lead",
  ],
  Design: ["Designer", "Graphic Designer", "Product Designer"],
  Product: ["Product Manager"],
};

export const EXPERIENCE_VALUES = Array.from(
  { length: 11 },
  (_, index) => index
);

export const JOB_MODES = ["Remote", "Hybrid", "In-Office"];

export const MIN_BASE_PAYS = Array.from(
  { length: 10 },
  (_, index) => 10 + index * 20
);

export const DEFAULT_FILTERS_VALUES = {
  experience: EXPERIENCE_VALUES[2],
  mode: JOB_MODES[2],
  minimumBasePay: MIN_BASE_PAYS[0],
};

const ALL_CONSTANTS = {
  BASE_URL,
  CURRENCY_ICONS,
  FETCH_JOBS_BODY,
  JOB_ROLES,
  FILTER_TYPES,
  EXPERIENCE_VALUES,
  JOB_MODES,
  MIN_BASE_PAYS,
  DEFAULT_FILTERS_VALUES,
};

export default ALL_CONSTANTS;
