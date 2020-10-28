const champagneTower = (poured, query_row, query_glass) => {
    //calculate total glasses up to the row noted. If the glasses poured > than that number, return 1
    //if only 1 glass poured and row is greater than zero, return 0
    //if the total glasses is less than than poured, find maxium number with none left over to find the last row
    //where all glasses are filled. 
    //if the query row is just under that row and there are still glasses left from poured, divide remaining poured by number of glasses in that row and return answer
    //if the row is greater than the last full row by 2 or more, return 0
    let result = 0;
    if (poured === 1 && query_row > 0) result = 0;
    let remainingGlasses = poured;
    for (let i = 1; i <= query_row; i++) {
      console.log(remainingGlasses);
      if(remainingGlasses === 0 && (i-1 < query_row)) {
        result = 0; 
        break}
        else if (i <= remainingGlasses && (i-1 === query_row)) {
            let tempResult = remainingGlasses/i;
            console.log(tempResult);
            tempResult > 1? result = 1 : result = tempResult;
        }
        else {
            remainingGlasses -= i
            console.log(remainingGlasses)
        }  
    }; 
    return result.toFixed(5)
};

//console.log(champagneTower(1, 1, 1)); //expect 0
console.log(champagneTower(2, 1, 1)); //expect 0.5
//console.log(champagneTower(100000009, 33, 17)); //expect 1