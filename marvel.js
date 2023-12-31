const consultaMarvel = () => {
  const url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9aa560a9a861b89b42bb33af60c12977&hash=429255a25aa4af880c6f79f4bd2ddba2";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const moviesList = data.data.results;
      const moviesTable = document.getElementById('comicTable')
      moviesList.forEach((moviesList) => {
        const row = document.createElement('tr')
        const title = document.createElement("td") 
        title.textContent = moviesList.title
        const movieStories= moviesList.stories.items
        const movieCreators= moviesList.creators.items
        row.appendChild(title)

        movieCreators.forEach((movieCreators)=>{
          const creatorsName = document.createElement("td")
          creatorsName.textContent = movieCreators.name
          row.appendChild(creatorsName)
          console.log(creatorsName)
        })
        movieStories.forEach((movieStories)=>{
          const Storiesname= document.createElement("td")
          Storiesname.textContent= movieStories.name
          row.appendChild(Storiesname)
          console.log(Storiesname)
        }) 

        moviesTable.append(row)

      });
      console.log("200")
    })

    .catch(error => {

      console.error("400:", error);
    });
}