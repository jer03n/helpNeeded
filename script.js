const allMovies = document.getElementById("all-movies-list");
const imdbUrl = "https://www.imdb.com/title/";

// function to create new li's in ul 

function createLiItems(movie) {
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const moviePoster = document.createElement("img"); 
    moviePoster.setAttribute("src", movie.poster);
    newA.setAttribute("href", imdbUrl + movie.imdbID);
    newA.setAttribute("target", "_blank");
    
    newLi.appendChild(newA).appendChild(moviePoster);
    return newLi;
}


// function to add new li to ul in DOM 

function addMoviesToDom(movies) {
    const addMovie = movies.map(createLiItems);
    addMovie.forEach((movie) => {
        allMovies.appendChild(movie);
    });
}
addMoviesToDom(movies);


// add eventlistener to radio buttons 

function addEventListener() {
    const btns = document.getElementsByName('movie_selection');
    btns.forEach(btn => {
        btn.addEventListener('change', handleOnChangeEvent);

    });
};
addEventListener();

// Empty allMovies  

function emptyMovies() {
    while (allMovies.firstChild) {
        allMovies.removeChild(allMovies.firstChild);
    }
};

// year filter 

function filterLatestMovies(year) {
    const filterYearMovies = movies.filter((movie) => {
        if (movie.year >= year) {
            return movie;
        }
    });
    emptyMovies();
    addMoviesToDom(filterYearMovies);
};

// movie filter

function filterMovies(wordInMovie) {
    const filterTitleMovies = movies.filter((movie) => {
        movie.title.includes(wordInMovie);
    });
    emptyMovies();
    addMoviesToDom(filterTitleMovies);
};


// Handle on change event with switch  

function handleOnChangeEvent(event) {
    console.log(event.target.value)
    switch (event.target.value) {
        case "new-movies":
            console.log("new-movies")
            filterLatestMovies(2014);
            break;
        case "avenger":
            filterMovies("avenger");
            break;
        case "x-men":
            filterMovies("x-men");
            break;
        case "princess":
            filterMovies("princess");
            break;
        case "batman":
            filterMovies("batman");
            break;
    }
};



