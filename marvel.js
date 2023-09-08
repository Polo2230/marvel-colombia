const consultaMarvel = () => {
  const url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9aa560a9a861b89b42bb33af60c12977&hash=429255a25aa4af880c6f79f4bd2ddba2";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const moviesList = data.data.results;      
      const moviesTable = document.getElementById('comicTable')
      moviesList.forEach((moviesList) => {
        const row = document.createElement("tr")
        const title = document.createElement("td") 
        title.textContent = moviesList.title
        const movieStories= moviesList.stories.items
        const movieCreators= moviesList.creators.items   
        movieStories.forEach((movieStories)=>{
          const Storiesname= document.createElement("td")
          Storiesname.textContent= movieStories.name
          row.appendChild(Storiesname)
          console.log(Storiesname)  
        }) 
        movieCreators.forEach((movieCreators)=>{
          const creatorsName = document.createElement("td")
          creatorsName.textContent = movieCreators.name
          row.appendChild(creatorsName)
          console.log(creatorsName)
        })
        moviesTable.append(row)
        
      });

    })

    .catch(error => {
      console.error("Error:", error);
    });
}
