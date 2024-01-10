export const pretty164 = (e164str: string) => {
  const len = e164str.length;
  if (len < 12 || len > 15 || e164str[0] !== "+") {
    return e164str;
  }
  switch (e164str.length) {
    case 12: // US, county calling code should always be 1 but we don't enforce that.
      return `+${range(1, 2)}-${range(2, 5)}-${range(5, 8)}-${range(8, 12)}`;
    case 13: // Common UK & Intl.
      return `+${range(1, 3)}-${range(3, 5)}-${range(5, 9)}-${range(9, 13)}`;
    case 14: // Intl.
      return `+${range(1, 3)}-${range(3, 6)}-${range(6, 10)}-${range(10, 14)}`;
    case 15: // Intl.
      return `+${range(1, 3)}-${range(3, 7)}-${range(7, 11)}-${range(11, 15)}`;
  }
  // eslint-disable-next-line no-inner-declarations
  function range(start: number, end: number) {
    return e164str.substring(start, end);
  }
}