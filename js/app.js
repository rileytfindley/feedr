let mainEl = document.getElementById("main");
let popUpEl = document.getElementById("popUp");

function loadPopUp(title, content, url) {
  popUpEl.innerHTML = "";
  let closer = document.createElement("a");
  closer.classList.add("closePopUp");
  closer.innerHTML = "X";
  let containerEl = document.createElement("div");
  containerEl.classList.add("container");
  let titleEl = document.createElement("h1");
  titleEl.innerHTML = title;
  let description = document.createElement("p");
  description.innerHTML = content;
  let urlEl = document.createElement("a");
  urlEl.classList.add("popUpAction");
  urlEl.innerHTML = "Read more from source";
  urlEl.setAttribute("href", url);
  popUpEl.appendChild(closer);
  containerEl.appendChild(titleEl);
  containerEl.appendChild(description);
  containerEl.appendChild(urlEl);
  popUpEl.appendChild(containerEl);
} //loadPopUp

function loadPage(result, index) {
  //main variables
  let photoUrl;
  if (result.urlToImage == "") {
    photoUrl = "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg";
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
  //creating article content
  let articleContent = document.createElement("section");
  let link = document.createElement("a");
  let articleTitle = document.createElement("h3");
  let description = document.createElement("h6");
  articleContent.classList.add("articleContent");
  link.setAttribute("id", index);
  link.setAttribute("href", "#");
  link.setAttribute("onclick", "loadPopUp(title, content, url);");
  //$(index).on('click', loadPopUp(title, content, url));
  articleTitle.innerHTML = title;
  description.innerHTML = content;
  link.appendChild(articleTitle)
  articleContent.appendChild(link);
  articleContent.appendChild(description);
  //creating impressions
  let impressions = document.createElement("section");
  impressions.classList.add("impressions");
  impressions.innerHTML = index + 1;
  //creating clearfix
  let clearFix = document.createElement("div");
  clearFix.classList.add("clearfix");
  //appending everything to article
  articleEl.appendChild(featuredImage);
  articleEl.appendChild(articleContent);
  articleEl.appendChild(impressions);
  articleEl.appendChild(clearFix);
  //appending article to main section
  mainEl.appendChild(articleEl.cloneNode(true));
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
