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

const ALL_CONSTANTS = {
  BASE_URL,
  CURRENCY_ICONS,
  FETCH_JOBS_BODY,
  JOB_ROLES
};

export default ALL_CONSTANTS;
