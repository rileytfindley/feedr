let mainEl = document.getElementById("main");

function toggleClassFunc() {
  temp = document.getElementById("search");
  if (temp.classList.contains("active")) {
    temp.classList.remove("active");
  } else {
    temp.classList.add("active");
  } //if-else
} //toggleClassFunc

function loadPage(result, index) {
  //main variables
  let photoUrl;
  if (result.urlToImage == "") {
    photoUrl = "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg";
  } else {
    photoUrl = result.urlToImage;
  } //if-else
  let title = result.title;
  let content = result.description;
  let url = result.url;
  //creating main article section
  let articleEl = document.createElement("article");
  articleEl.classList.add("article");
  //creating image content
  let featuredImage = document.createElement("section");
  let image = document.createElement("img");
  featuredImage.classList.add("featuredImage");
  image.setAttribute("src", photoUrl);
  featuredImage.appendChild(image);
  featuredImage.onerror = function() {
    alert("Error loading image.");
  } //onerror
  //creating article content
  let articleContent = document.createElement("section");
  let link = document.createElement("a");
  let articleTitle = document.createElement("h3");
  let description = document.createElement("h6");
  articleContent.classList.add("articleContent");
  link.setAttribute("id", index);
  link.setAttribute("href", "#");
  link.classList.add("openingPopUp");
  //$(index).on('click', loadPopUp(title, content, url));
  //articleTitle.innerHTML = title;
  description.innerHTML = content;
  //link.appendChild(articleTitle);
  link.innerHTML = title;
  articleContent.appendChild(link);
  articleContent.appendChild(description);
  //creating impressions
  let impressions = document.createElement("section");
  impressions.classList.add("impressions");
  impressions.innerHTML = index + 1;
  //creating clearfix
  let clearFix = document.createElement("div");
  clearFix.classList.add("clearfix");
  //pop-up stuff
  let popUpEl = document.createElement("div");
  popUpEl.setAttribute("id", "popUp" + index);
  let closer = document.createElement("a");
  closer.classList.add("closePopUp");
  closer.innerHTML = "X";
  closer.setAttribute("id", index);
  let containerEl = document.createElement("div");
  containerEl.classList.add("container");
  let titleEl = document.createElement("h1");
  titleEl.innerHTML = title;
  let descriptionEl = document.createElement("p");
  descriptionEl.innerHTML = content;
  let urlEl = document.createElement("a");
  urlEl.classList.add("popUpAction");
  urlEl.innerHTML = "Read more from source";
  urlEl.setAttribute("href", url);
  urlEl.setAttribute("target", "_blank");
  urlEl.onerror = function() {
    alert("Error loading " + url);
  } //onerror
  popUpEl.appendChild(closer);
  containerEl.appendChild(titleEl);
  containerEl.appendChild(descriptionEl);
  containerEl.appendChild(urlEl);
  popUpEl.appendChild(containerEl);
  popUpEl.classList.add("hidden");
  popUpEl.classList.add("loader");
  //appending everything to article
  articleEl.appendChild(featuredImage);
  articleEl.appendChild(articleContent);
  articleEl.appendChild(impressions);
  articleEl.appendChild(clearFix);
  articleEl.appendChild(popUpEl);
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
  } //remove hidden onclick
  //appending article to main section
  mainEl.appendChild(articleEl.cloneNode(true));
  mainEl.onerror = function() {
      alert("Error loading site.");
  } //onerror
} //loadPage

function onLoad() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      console.log(results);
      results.articles.forEach(function(result, index){
        loadPage(result, index);
      })
    } //success
  })
} //onLoad
window.onload = onLoad;

function feedr() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      mainEl.innerHTML = "";
      console.log(results);
      results.articles.forEach(function(result, index){
        loadPage(result, index);
      })
    } //success
  })
} //feedr

function cnn() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      mainEl.innerHTML = "";
      console.log(results);
      results.articles.forEach(function(result, index){
        loadPage(result, index);
      })
    } //success
  })
} //cnn

function abc() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      mainEl.innerHTML = "";
      console.log(results);
      results.articles.forEach(function(result, index){
        loadPage(result, index);
      })
    } //success
  })
} //abc

function bbc() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      mainEl.innerHTML = "";
      console.log(results);
      results.articles.forEach(function(result, index){
        loadPage(result, index);
      })
    } //success
  })
} //bbc
