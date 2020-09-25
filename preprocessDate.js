const preprocessDate = (dates) => {
  //cache for numbers; month conversions
  const cache = {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true, 
      7: true,
      8: true,
      9: true, 
      0: true,
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05", 
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12"
  };
  //map provided dates array
  const newDates = dates.map(el => {
      //convert string to array for easy access of end characters; utlizing slice
      let subArr = el.split('');
      //create variable for year with slice of last 4 elements in array
      const year = subArr.slice(subArr.length-4).join('');
      //create variable for month; slice length-8 to length-5(eliminates white space) and find in cache
      const month = cache[subArr.slice(subArr.length-8, subArr.length-5).join('')];
      //create empty string for date value
      let date = ''
      //iterate through current el(string) to isolate leading date numbers and add to date variable
      for (let i = 0; i < el.length; i++){
          if (cache[el[i]]) date += el[i];
          else break
      }
      date.length > 1? date : date = 0+date;
      //return updated string
      return `${year}-${month}-${date}`
  })
  //return array of converted dates
  return newDates;
}

const dates = ["20th Oct 2052", "6th Jun 1933", "26th May 1960", "20th Sep 1958", "16th Mar 2068", "25th May 1912", "16th Dec 2018",]

console.log(preprocessDate(dates));