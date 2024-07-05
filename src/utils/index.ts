const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const formatCurency = (number: number) => {
  return CURRENCY_FORMATER.format(number);
};
