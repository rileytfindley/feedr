let mainEl = document.getElementById("main");

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
      // temp.innerHTML = "";
      // let closer2 = document.createElement("a");
      // closer2.classList.add("closePopUp");
      // closer2.innerHTML = "X";
      // closer2.setAttribute("id", e.target.getAttribute("id"));
      // let containerEl2 = document.createElement("div");
      // containerEl2.classList.add("container");
      // let titleEl2 = document.createElement("h1");
      // let title2 = "Temp";
      // titleEl2.innerHTML = title2;
      // let descriptionEl2 = document.createElement("p");
      // let content2 = "tEMP";
      // descriptionEl2.innerHTML = content2;
      // let urlEl2 = document.createElement("a");
      // urlEl2.classList.add("popUpAction");
      // urlEl2.innerHTML = "Read more from source";
      // let url2 = "teeeemp";
      // urlEl2.setAttribute("href", url2);
      // urlEl2.setAttribute("target", "_blank");
      // temp.appendChild(closer2);
      // containerEl2.appendChild(titleEl2);
      // containerEl2.appendChild(descriptionEl2);
      // containerEl2.appendChild(urlEl2);
      // temp.appendChild(containerEl2);
      // temp.classList.add("hidden");
      // temp.classList.add("loader");
    } //if
  } //remove hidden onclick
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
