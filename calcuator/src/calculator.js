import React from 'react';

function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const [numb, customDelimiter, remaining] = numbers.match(/^\/\/(.+)\n([\s\S]*)/);
    delimiter = new RegExp(customDelimiter);
    numbers = remaining;
  }

  const parts = numbers.split(delimiter).map(Number);
  const negatives = parts.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return parts.reduce((sum, num) => sum + num, 0);
}
export default add;
