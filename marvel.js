const consultaMarvel = () => {
  const apiUrl = "https://gateway.marvel.com/v1/public/series";
  const apiKey = "65f08d74236aae47779473fd02b1f0d3";
  const ts = "1";
  const hash = "3c6fc4ce58ff953d1a65a8ee2de31037";

  const url = `${apiUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

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
        movieStories.forEach((movieStories)=>{
          const Storiesname= document.createElement("p")
          Storiesname.textContent= movieStories.name
          moviesCard.appendChild(Storiesname)
          console.log(Storiesname)  
        }) 
        
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