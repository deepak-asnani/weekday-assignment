import WEEKDAY_ICONS from "./icons/icons";
export const BASE_URL = 'https://api.weekday.technology';

export const FETCH_JOBS_URL = '/adhoc/getSampleJdJSON';

export const CURRENCY_ICONS = {
    "USD": WEEKDAY_ICONS.AttachMoneyRoundedIcon,
    "INR": WEEKDAY_ICONS.CurrencyRupeeRoundedIcon
}

const ALL_CONSTANTS = {
    BASE_URL,
    CURRENCY_ICONS
}

export default ALL_CONSTANTS