export const numberToWords = (numStr: string | number): string => {
  const clean = String(numStr).replace(/[^0-9]/g, "");
  if (!clean) return "";
  const num = parseInt(clean, 10);
  if (isNaN(num) || num === 0) return "";

  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const inWords = (n: number): string => {
    if (n < 20) return a[n];
    if (n < 100)
      return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
    if (n < 1000) {
      const rem = n % 100;
      return (
        a[Math.floor(n / 100)] +
        " Hundred" +
        (rem !== 0 ? " and " + inWords(rem) : "")
      );
    }
    if (n < 100000) {
      const rem = n % 1000;
      return (
        inWords(Math.floor(n / 1000)) +
        " Thousand" +
        (rem !== 0 ? (rem < 100 ? " and " : " ") + inWords(rem) : "")
      );
    }
    if (n < 10000000) {
      const rem = n % 100000;
      return (
        inWords(Math.floor(n / 100000)) +
        " Lakh" +
        (rem !== 0 ? " " + inWords(rem) : "")
      );
    }
    const rem = n % 10000000;
    return (
      inWords(Math.floor(n / 10000000)) +
      " Crore" +
      (rem !== 0 ? " " + inWords(rem) : "")
    );
  };

  const words = inWords(num);
  return words ? `${words} Taka` : "";
};
