function calculateAmount(prices) {
  //initialize current lowest discount prices[0]
  let maxDiscount = prices[0]
  //initialize sum with value of prices[0]
  let sum = prices[0];
  //iterate with for loop, starting at index 1
  for (let i = 1; i < prices.length; i++){
      //find maxDiscount(lowest value between current maxDiscount and previous element in array)
      maxDiscount = Math.min(maxDiscount, prices[i-1]);
      //find discounted price(current element in array - maxDiscount)
      const discount = prices[i]-maxDiscount;
      //if the discount is less than 0, add zero to sum
      if (discount < 0) sum += 0;
      //else add disocunt to sum
      else sum += discount
  };
  //return the sum
  return sum
}