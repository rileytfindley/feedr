// function loadPopUp(url, title, content) {
//   let titleEl = document.createElement('h1');
//   titleEl.innerHTML = title;
//   let contentEl = document.createElement('p');
//   contentEl.innerHTML = content;
//   popUpEl.append(contentEl);
//   let urlEl = document.createElement('a');
//   urlEl.setAttribute('href', url);
//   urlEl.innerHTML = "Read more from source";
// } //loadPopUp
//
// function toggleClassFunc() {
//   $("img").toggleClass("#search.active")
// } //toggleClass

let mainEl = document.getElementById("main");

function loadPage(result, index) {
  //creating main article section
  let articleEl = document.createElement("article");
  articleEl.classList.add("article");
  //creating image content
  let featuredImage = document.createElement("section");
  let photoUrl;
  if (result.urlToImage == null) {
    photoUrl = "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg";
  } else {
    photoUrl = result.urlToImage;
  } //if-else
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
  link.setAttribute("href", "#");
  articleTitle.innerHTML = result.title;
  description.innerHTML = result.description;
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
        //creating main article section
        let articleEl = document.createElement("article");
        articleEl.classList.add("article");
        //creating image content
        let featuredImage = document.createElement("section");
        let photoUrl;
        if (result.urlToImage == null) {
          photoUrl = "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg";
        } else {
          photoUrl = result.urlToImage;
        } //if-else
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
        link.setAttribute("href", "#");
        articleTitle.innerHTML = result.title;
        description.innerHTML = result.description;
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
