function loadPopUp(url, title, content) {
  let titleEl = document.createElement('h1');
  titleEl.innerHTML = title;
  let contentEl = document.createElement('p');
  contentEl.innerHTML = content;
  popUpEl.append(contentEl);
  let urlEl = document.createElement('a');
  urlEl.setAttribute('href', url);
  urlEl.innerHTML = "Read more from source";
} //loadPopUp

function toggleClassFunc() {
  $("img").toggleClass("#search.active")
} //toggleClass

function onLoad() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      console.log(results);
      let counter = 0;
      results.articles.forEach(function(result, index){
        if (result.urlToImage == null) {
          counter++;
        } else {
          let content = result.description;
          let contentEl = document.createElement('h6');
          contentEl.innerHTML = content;
          contentEl.className = "appended";
          articleContentEl.append(contentEl);
          let impressionsEl = document.createElement('section');
          impressionsEl.innerHTML = index + 1 - counter;
          impressionsEl.className = "appended";
          impressionsElement.append(impressionsEl);
          let image = result.urlToImage;
          let imageElement = document.createElement('img');
          imageElement.setAttribute('src', image);
          imageElement.className = "appended";
          featuredImageEl.append(imageElement);
          let title = result.title;
          let url = result.url;
          let urlEl = document.createElement('a');
          urlEl.setAttribute("onclick", function() { loadPopUp(url, title, content)});
          //urlEl.setAttribute('href', url);
          urlEl.innerHTML = title;
          urlEl.className = "appended";
          articleContentEl.append(urlEl);
        } //if-else
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
      console.log(results);
      let counter = 0;
      results.articles.forEach(function(result, index){
        if (result.urlToImage == null) {
          counter++;
        } else {
          let impressionsEl = document.createElement('section');
          impressionsEl.innerHTML = index + 1 - counter;
          impressionsElement.append(impressionsEl);
          let image = result.urlToImage;
          let imageElement = document.createElement('img');
          imageElement.setAttribute('src', image);
          featuredImageEl.append(imageElement);
          let title = result.title;
          let url = result.url;
          let urlEl = document.createElement('a');
          urlEl.setAttribute('href', url);
          urlEl.innerHTML = title;
          articleContentEl.append(urlEl);
          let content = result.description;
          let contentEl = document.createElement('h6');
          contentEl.innerHTML = content;
          articleContentEl.append(contentEl);
        } //if-else
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
      // var els = document.getElementsByClassName("appended");
      // Array.prototpe.forEach.call(els, function(el) {
      //   els.remove(el);
      // });
      console.log(results);
      let counter = 0;
      results.articles.forEach(function(result, index){
        if (result.urlToImage == null) {
          counter++;
        } else {
          let impressionsEl = document.createElement('section');
          impressionsEl.innerHTML = index + 1 - counter;
          impressionsElement.append(impressionsEl);
          let image = result.urlToImage;
          let imageElement = document.createElement('img');
          imageElement.setAttribute('src', image);
          featuredImageEl.append(imageElement);
          let title = result.title;
          let url = result.url;
          let urlEl = document.createElement('a');
          urlEl.setAttribute('href', url);
          urlEl.innerHTML = title;
          articleContentEl.append(urlEl);
          let content = result.description;
          let contentEl = document.createElement('h6');
          contentEl.innerHTML = content;
          articleContentEl.append(contentEl);
        } //if-else
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
      console.log(results);
      let counter = 0;
      results.articles.forEach(function(result, index){
        if (result.urlToImage == null) {
          counter++;
        } else {
          let impressionsEl = document.createElement('section');
          impressionsEl.innerHTML = index + 1 - counter;
          impressionsElement.append(impressionsEl);
          let image = result.urlToImage;
          let imageElement = document.createElement('img');
          imageElement.setAttribute('src', image);
          featuredImageEl.append(imageElement);
          let title = result.title;
          let url = result.url;
          let urlEl = document.createElement('a');
          urlEl.setAttribute('href', url);
          urlEl.innerHTML = title;
          articleContentEl.append(urlEl);
          let content = result.description;
          let contentEl = document.createElement('h6');
          contentEl.innerHTML = content;
          articleContentEl.append(contentEl);
        } //if-else
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
      console.log(results);
      let counter = 0;
      results.articles.forEach(function(result, index){
        if (result.urlToImage == null) {
          counter++;
        } else {
          let impressionsEl = document.createElement('section');
          impressionsEl.innerHTML = index + 1 - counter;
          impressionsElement.append(impressionsEl);
          let image = result.urlToImage;
          let imageElement = document.createElement('img');
          imageElement.setAttribute('src', image);
          featuredImageEl.append(imageElement);
          let title = result.title;
          let url = result.url;
          let urlEl = document.createElement('a');
          urlEl.setAttribute('href', url);
          urlEl.innerHTML = title;
          articleContentEl.append(urlEl);
          let content = result.description;
          let contentEl = document.createElement('h6');
          contentEl.innerHTML = content;
          articleContentEl.append(contentEl);
        } //if-else
      })
    } //success
  })
} //bbc
