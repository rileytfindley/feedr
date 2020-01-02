let mainEl = document.getElementById("main");
let lastCalled = onLoad;
var movieList = [];
var alphabetical = [];
var releaseOrder = [];

/**
* This function alters whether or not the search bar is visible by
* toggling the active class from the element.
*/
function toggleClassFunc() {
  temp = document.getElementById("search");
  if (temp.classList.contains("active")) {
    temp.classList.remove("active");
  } else {
    temp.classList.add("active");
  } //if-else
} //toggleClassFunc

/**
* This function is called when loading the results from a search query. It
* sets up the results on screen.
*
* @param result - the specific element in the loop of the results array
* @param index - which element it is
*/
function loadPage(result, index) {
  //main variables
  let photoUrl;
  if (result.poster_path == "") {
    photoUrl = "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg";
  } else {
    photoUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + result.poster_path;
  } //if-else
  let title = result.title;
  let content = result.overview;
  //creating main movie section
  let movieEl = document.createElement("article");
  movieEl.classList.add("article");
  //creating image content
  let featuredImage = document.createElement("section");
  let image = document.createElement("img");
  featuredImage.classList.add("featuredImage");
  image.setAttribute("src", photoUrl);
  image.setAttribute("id", "poster" + index);
  featuredImage.appendChild(image);
  featuredImage.onerror = function() {
    alert("Error loading image.");
  } //onerror
  //creating movie content
  let movieContent = document.createElement("section");
  let link = document.createElement("a");
  let movieTitle = document.createElement("h3");
  movieTitle.setAttribute("id", "title" + index);
  let description = document.createElement("h6");
  description.setAttribute("id", "content" + index);
  movieContent.classList.add("movieContent");
  link.setAttribute("id", index);
  link.setAttribute("href", "#");
  link.classList.add("addToList");
  description.innerHTML = content;
  link.innerHTML = title;
  movieContent.appendChild(link);
  movieContent.appendChild(description);
  //creating year of release
  let release = document.createElement("div");
  release.setAttribute("id", "release" + index);
  release.classList.add("release");
  release.innerHTML = "Released on: " + result.release_date;
  let containerEl = document.createElement("div");
  containerEl.classList.add("container");
  movieTitle.innerHTML = title;
  let descriptionEl = document.createElement("p");
  descriptionEl.innerHTML = content;
  containerEl.appendChild(movieTitle);
  containerEl.appendChild(descriptionEl);
  //appending everything to article
  movieEl.appendChild(featuredImage);
  movieEl.appendChild(movieContent);
  movieEl.appendChild(release);
  //add movie to List
  mainEl.onclick=(e)=>{
    console.log(e.target);
    if (e.target.getAttribute("class") == "addToList") {
      console.log(movieList);
      let t = document.getElementById(e.target.getAttribute("id")).innerHTML;
      let p = document.getElementById("poster" + e.target.getAttribute("id")).src;
      let c = document.getElementById("content" + e.target.getAttribute("id")).innerHTML;
      let r = document.getElementById("release" + e.target.getAttribute("id")).innerHTML;
      var newFilm = {
        title: t,
        poster: p,
        content: c,
        release: r,
        ranking: 0,
      };
      movieList.push(newFilm);
      console.log(movieList);
    } //if
  } //add to list
  //appending movie to main section
  mainEl.appendChild(movieEl.cloneNode(true));
  mainEl.onerror = function() {
      alert("Error loading site.");
  } //onerror
} //loadPage

/**
* This method is called when the webpage is first visited. It loads a page of
* new releases.
*/
function onLoad() {
  site = $.ajax({
    url:"https://api.themoviedb.org/3/search/movie?api_key=" + movieapi + "&language=en-US&query=a&page=1&include_adult=false&year=2019",
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      console.log(results);
      let instructions = document.createElement("h3");
      instructions.innerHTML = "Click on the Title to Add to List.";
      mainEl.appendChild(instructions);
      results.results.forEach(function(result, index){
        loadPage(result, index);
      })
    } //success
  })
} //onLoad

/**
* This method is called when the user makes a search. It loads a page of
* results.
*/
function searchFilms() {
  site = $.ajax({
    url:"https://api.themoviedb.org/3/search/movie?api_key=" + movieapi + "&language=en-US&query=Star,Wars&page=1&include_adult=false",
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      console.log(results);
      let instructions = document.createElement("h3");
      instructions.innerHTML = "Click on the Title to Add to List.";
      mainEl.appendChild(instructions);
      results.results.forEach(function(result, index){
        loadPage(result, index);
      })
    } //success
  })
} //searchFilms

/**
* This method ensures that the rankings are in their proper position
* despite additions, removals, changes or filters. It assigns the
* rankings relative to the index in the movieList array.
*/
function assignRankings() {
  for (let i = 0; i < movieList.length; i++) {
    movieList[i].ranking = i + 1;
  } //for
} //assignRankings

/**
* This function is called when loading the user's list with any filter. It
* sets up the results on screen.
*
* @param i - which element in the array
* @param array - which filter to use when displaying the list
*/
function repeatList(i, array) {
  if (i == 0) {
    console.log(array);
  } //if
  //main variables
  let photoUrl = array[i].poster;
  let title = array[i].title;
  let content = array[i].content;
  let ranking = array[i].ranking;
  //creating main movie section
  let movieEl = document.createElement("article");
  movieEl.classList.add("article");
  //creating image content
  let featuredImage = document.createElement("section");
  let image = document.createElement("img");
  featuredImage.classList.add("featuredImage");
  image.setAttribute("src", photoUrl);
  image.setAttribute("id", "poster" + i);
  featuredImage.appendChild(image);
  featuredImage.onerror = function() {
    alert("Error loading image.");
  } //onerror
  //creating movie content
  let movieContent = document.createElement("section");
  let link = document.createElement("a");
  let movieTitle = document.createElement("h3");
  movieTitle.setAttribute("id", "title" + i);
  let description = document.createElement("h6");
  description.setAttribute("id", "content" + i);
  movieContent.classList.add("movieContent");
  link.setAttribute("id", i);
  link.setAttribute("href", "#");
  link.classList.add("openingPopUp");
  description.innerHTML = content;
  link.innerHTML = "#" + ranking + " - " + title;
  movieContent.appendChild(link);
  movieContent.appendChild(description);
  //creating year of release
  let release = document.createElement("div");
  release.setAttribute("id", "release" + i);
  release.classList.add("release");
  release.innerHTML = "Released on: " + array[i].release;
  //pop-up stuff
  let popUpEl = document.createElement("div");
  popUpEl.setAttribute("id", "popUp" + i);
  let closer = document.createElement("a");
  closer.classList.add("closePopUp");
  closer.innerHTML = "X";
  closer.setAttribute("id", "closer" + i);
  let containerEl = document.createElement("div");
  containerEl.classList.add("container");
  let titleEl = document.createElement("h1");
  titleEl.innerHTML = title;
  let changeEl = document.createElement("input");
  changeEl.setAttribute("id", "search" + i);
  changeEl.setAttribute("type", "text");
  changeEl.setAttribute("value", "");
  let buttonEl = document.createElement("button");
  buttonEl.classList.add("rankerButton");
  buttonEl.setAttribute("id", "button" + i);
  buttonEl.innerHTML = "Change Rank";
  let removeEl = document.createElement("a");
  removeEl.classList.add("popUpAction");
  removeEl.innerHTML = "Remove from List.";
  removeEl.setAttribute("href", "#");
  removeEl.setAttribute("id", "remove" + i);
  removeEl.onerror = function() {
    alert("Error loading " + url);
  } //onerror
  popUpEl.appendChild(closer);
  containerEl.appendChild(titleEl);
  containerEl.appendChild(changeEl);
  containerEl.appendChild(buttonEl);
  containerEl.appendChild(removeEl);
  popUpEl.appendChild(containerEl);
  popUpEl.classList.add("hidden");
  popUpEl.classList.add("loader");
  //appending everything to article
  movieEl.appendChild(featuredImage);
  movieEl.appendChild(movieContent);
  movieEl.appendChild(release);
  movieEl.appendChild(popUpEl);
  mainEl.onclick=(e)=>{
    console.log(e.target);
    if (e.target.getAttribute("class") == "openingPopUp") {
      let temp = document.getElementById("popUp" + e.target.getAttribute("id"));
      temp.classList.remove("hidden");
      if (!temp.classList.contains("hidden")) {
        temp.classList.remove("loader");
      } //if
    } //if
    if (e.target.getAttribute("class") == "closePopUp") {
      let temp = document.getElementById("popUp" + e.target.getAttribute("id"));
      temp.classList.add("hidden");
      if (temp.classList.contains("hidden")) {
        temp.classList.add("loader");
      } //if
    } //if
    if (e.target.getAttribute("class") == "rankerButton") {
      let temp = e.target.getAttribute("id");
      temp = temp.substring(6);
      let newIndex = document.getElementById("search" + temp).value;
      var film = movieList[temp];
      movieList.splice(temp, 1);
      movieList.splice(newIndex - 1, 0, film);
      if (lastCalled == mylist) {
        mylist();
      } else if (lastCalled == asce) {
        asce();
      } else if (lastCalled == desc) {
        desc();
      } else if (lastCalled == alph) {
        alph();
      } else if (lastCalled == release) {
        release();
      } else {
        rerelease();
      } //if-else
    } //if
    if (e.target.getAttribute("class") == "popUpAction") {
      let temp = e.target.getAttribute("id");
      temp = temp.substring(6);
      movieList.splice(temp, 1);
      if (lastCalled == mylist) {
        mylist();
      } else if (lastCalled == asce) {
        asce();
      } else if (lastCalled == desc) {
        desc();
      } else if (lastCalled == alph) {
        alph();
      } else if (lastCalled == release) {
        release();
      } else {
        rerelease();
      } //if-else
    } //if
  } //remove hidden onclick
  //appending movie to main section
  mainEl.appendChild(movieEl.cloneNode(true));
  mainEl.onerror = function() {
      alert("Error loading site.");
  } //onerror
} //repeatList

/**
* This filter displays the list from favorite to least favorite film.
*/
function asce() {
  mainEl.innerHTML = "";
  assignRankings();
  for (let i = 0; i < movieList.length; i++) {
    repeatList(i, movieList);
  } //for
  lastCalled = asce;
} //ascending

/**
* This filter displays the list from least favorite to favorite film.
*/
function desc() {
  mainEl.innerHTML = "";
  assignRankings();
  for (let i = movieList.length - 1; i > -1; i--) {
    repeatList(i, movieList);
  } //for
  lastCalled = desc;
} //descending

/**
* This filter displays the list in alphabetical order.
*/
function alph() {
  mainEl.innerHTML = "";
  assignRankings();
  alphabetical = movieList;
  for (let i = 0; i < alphabetical.length; i++) {
    for (let t = 0; t < alphabetical.length - 1; t++) {
      if (alphabetical[t + 1].title < alphabetical[t].title) {
        var temp = alphabetical[t + 1];
        alphabetical[t + 1] = alphabetical[t];
        alphabetical[t] = temp;
      } //if
    } //for
  } //for
  for (let i = 0; i < movieList.length; i++) {
    repeatList(i, alphabetical);
  } //for
  lastCalled = alph;
} //alphabetical

/**
* This filter displays the list from the oldest to newest film.
*/
function release() {
  mainEl.innerHTML = "";
  assignRankings();
  releaseOrder = movieList;
  for (let i = 0; i < releaseOrder.length; i++) {
    for (let t = 0; t < releaseOrder.length - 1; t++) {
      if (releaseOrder[t + 1].release < releaseOrder[t].release) {
        var temp = releaseOrder[t + 1];
        releaseOrder[t + 1] = releaseOrder[t];
        releaseOrder[t] = temp;
      } //if
    } //for
  } //for
  for (let i = 0; i < movieList.length; i++) {
    repeatList(i, releaseOrder);
  } //for
  lastCalled = release;
} //oldest to newest

/**
* This filter displays the list from the newest to oldest film.
*/
function rerelease() {
  mainEl.innerHTML = "";
  assignRankings();
  releaseOrder = movieList;
  for (let i = 0; i < releaseOrder.length; i++) {
    for (let t = 0; t < releaseOrder.length - 1; t++) {
      if (releaseOrder[t + 1].release < releaseOrder[t].release) {
        var temp = releaseOrder[t + 1];
        releaseOrder[t + 1] = releaseOrder[t];
        releaseOrder[t] = temp;
      } //if
    } //for
  } //for
  for (let i = movieList.length - 1; i > -1; i--) {
    repeatList(i, releaseOrder);
  } //for
  lastCalled = rerelease;
} //newest to oldest

window.onload = onLoad;
