const decimalPlaces = { USD: 2, JPY: 0, KWD: 3 };
function formatMinor(amount, currency) {
  const digits = decimalPlaces[currency];
  if (digits === undefined) throw new Error('Unsupported currency');
  return (amount / (10 ** digits)).toFixed(digits);
}
module.exports = { decimalPlaces, formatMinor };
