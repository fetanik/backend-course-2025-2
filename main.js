const BASE='https://bank.gov.ua/NBU_ovdp';
const exact_date='10.09.2024';
const currency='EUR';
const sort='asc';
const mode='AuctionDate';
const u=new URL(BASE);
const qp=new URLSearchParams({date:exact_date,val_code:currency,mode,ord:sort});
u.search=`json&${qp.toString()}`;
console.log(u.toString());
