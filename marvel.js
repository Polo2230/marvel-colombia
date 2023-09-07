const consultaMarvel = () => {

  const url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9aa560a9a861b89b42bb33af60c12977&hash=429255a25aa4af880c6f79f4bd2ddba2";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const moviesList = data.data.results;
      console.log(moviesList)
      const moviesContainer = document.querySelector(".movies-list")
      moviesContainer.innerHTML = ""
      moviesList.forEach((moviesList) => {
        const moviesCard = document.createElement("div")
        const movieStories= moviesList.stories.items
        const movieCreators= moviesList.creators.items
        movieStories.forEach((movieStories)=>{
          const Storiesname= document.createElement("p")
          Storiesname.textContent= movieStories.name
          moviesCard.appendChild(Storiesname)
          console.log(Storiesname)  
        }) 
        movieCreators.forEach((movieCreators)=>{
          const creatorsName = document.createElement("p")
          creatorsName.textContent = movieCreators.name
          moviesCard.appendChild(creatorsName)
          console.log(creatorsName)
        })
                  
        moviesContainer.appendChild(moviesCard)
                                  
      });

    })


    .catch(error => {
      console.error("Error:", error);
    });
}


/*   .then(response => response.json())
.then(data => {
  data.data.results.forEach(item => {
    console.log("Title:", item.title);

    console.log("URLs:");
    item.urls.forEach(urlInfo => {
      console.log(urlInfo.url);
    });

    console.log("--------");
  });
}) */