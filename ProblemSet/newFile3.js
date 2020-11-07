/*
given dollar amount (ex $3.18) determine how many nickels will be dispensed for change (no dollarbills used)
consider quarters and dimes, but only return nickels
*/

//if the amount is less than 0.05, return 0
//find remainder of dividing given amount by 0.25, multiply the floor of that number by 0.25 and subtract from given amount
//find remainder of dividing new amount by 0.10, multiply the floor of that number by 0.10 and subtract from given amount
//find remainder of dividing by new amount by 0.05, return the floor of that number

const nickels = (num) => {
  if (num < 0.05) return 0;
  let currentAmount = num;
  currentAmount = currentAmount - (Math.floor(currentAmount/0.25) * 0.25);
  currentAmount = currentAmount - (Math.floor(currentAmount/0.10) * 0.10);
  return Math.floor(currentAmount/0.05)
};

