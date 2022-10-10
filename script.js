let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched){
        this.title = title
        this.rating = rating
        this.haveWatched = haveWatched

        if (this.havewatched == true) {
            this.havewatched = true
        }
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie)
    console.log("A new movie is added")
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....")
    for(var i=0; i<allMovies.length; i++){
        console.log("%s, rating of %f, havewatched: %s", allMovies[i].title, allMovies[i].rating, allMovies[i].haveWatched)
    }
    console.log("You have %d movies in total", allMovies.length)
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("Printing movie that has a rating higher that %f", rating)
    var total = 0
    for(var i=0; i<allMovies.length; i++){
        if(allMovies[i].rating > rating) {
            console.log("%s has a rating of %f", allMovies[i].title, allMovies[i].rating)
            total++
        }
    }
    console.log("In total, there are %d matches", total)
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("Changing the status of the movie...")
    for(var i=0; i<allMovies.length; i++){
        if(allMovies[i].title == title) {
            allMovies[i].haveWatched = !(allMovies[i].haveWatched)
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);