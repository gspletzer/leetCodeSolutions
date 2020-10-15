function maxMin (operations, x) {
  const products = [];
  const elements = {};
  operations.forEach((el, i) => {
    if(el === 'push') elements[x[i]] = x[i];
    if (el === 'pop') delete elements[x[i]];
    console.log(Math.min(...Object.values(elements)));
    console.log(Math.max(...Object.values(elements)));
    products.push((Math.min(...Object.values(elements))) * (Math.max(...Object.values(elements))));
    console.log(328330709 * 328330709)

  });
  return products
}

console.log(maxMin(['push', 'push'], [328330709, 570933073]));//not returning correct result due to limitations of javascript environment