async function getMovieList(year) {
  // store empty array, this will later have our movie titles
  const options = {
    hostname: "jsonmock.hackerrank.com",
    path: `/api/movies?Year=${year}`,
    method: "GET",
  };
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
  const results = new Promise((resolve, reject) => {
    const titles = [];
    const req = https.request(options, (res) => {
      res.on("data", (data) => {
        // parse movie information from Buffer --> String --> JS Object, so we can manipulate it
        const movies = JSON.parse(data.toString("utf-8"));
        // add title of each movie to array
        movies.data.forEach((movie) => {
          titles.push(movie.Title);
        });
      });
      res.on("error", (err) => {
        console.error(err);
      });
      res.on("end", () => {
        resolve(titles);
      });
    });
    // send request
    req.end();
  });
  return await results;
}
