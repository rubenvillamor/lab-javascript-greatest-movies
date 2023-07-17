// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let onlyDirectors
    onlyDirectors = moviesArray.map( Element => {
        return Element.director
    })
    return onlyDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSpielberg
    moviesSpielberg = moviesArray.filter( ( movie) => {
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    
    })
    return moviesSpielberg.length
}

// Iteration 3: All scores average - 
    function scoresAverage(moviesArray) {
        if ( moviesArray.length === 0) return 0
        let average = 0;
        let allScores = moviesArray.map((movie) => {
            return movie.score;
        });
    
        let sumScores = allScores.reduce(
            (acumulador, valorActual) => acumulador + valorActual,
            0
        );
    
        average = sumScores / moviesArray.length;
        let twoDigit = average.toFixed(2)
          let twoDigitNum = parseFloat(twoDigit)
          return twoDigitNum
    }
    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let moviesDrama = moviesArray.filter((movie) => 
    movie.genre.includes("Drama")

    )
    if ( moviesDrama.length === 0) return 0
    let scoresDrama = moviesDrama.map((movie) => {
        return movie.score
    })
    let sumScores = scoresDrama.reduce(
        (acumulador, valorActual) => acumulador + valorActual,
        0
    )
    let avarage = sumScores / moviesDrama.length;
    let twoDigit = avarage.toFixed(2)
    let twoDigitNum = parseFloat(twoDigit)
    return twoDigitNum

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopia = JSON.parse(JSON.stringify(moviesArray));
    let moviesArrayOrder = moviesArrayCopia.sort((movie, nextMovie) => {
        return movie.year - nextMovie.year

    }) 
    return moviesArrayOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopia = JSON.parse(JSON.stringify(moviesArray));
    let moviesArrayOrder = moviesArrayCopia.sort(( movie, nextMovie ) => {
        if ( movie.title > nextMovie.title)
        return -1;
        else if ( nextMovie.title < movie.title)
        return 1;
        else 
        return 0

    })
    let moviesTitle = moviesArrayOrder.map((movie)=> {
        return movie.title
    }) 
    return moviesTitle.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
