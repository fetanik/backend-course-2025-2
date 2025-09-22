const BASE = 'https://bank.gov.ua/NBU_ovdp';
const exact_date = '10.09.2024';
const currency = 'EUR';

const u = new URL(BASE);
u.search = 'json&' + new URLSearchParams({ date: exact_date, val_code: currency }).toString();

console.log(u.toString());
