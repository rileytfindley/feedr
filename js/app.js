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
        let impressionsEl = document.createElement('section');
        impressionsEl.innerHTML = index + 1;
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
        urlEl.setAttribute('href', url);
        urlEl.innerHTML = title;
        urlEl.className = "appended";
        articleContentEl.append(urlEl);
        let content = result.description;
        let contentEl = document.createElement('h6');
        contentEl.innerHTML = content;
        contentEl.className = "appended";
        articleContentEl.append(contentEl);
      })
    }
  })
}
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
      results.articles.forEach(function(result, index){
        let impressionsEl = document.createElement('section');
        impressionsEl.innerHTML = index + 1;
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
      })
    }
  })
}

function cnn() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      //var x = document.getElementsByClassName("appended");
      //x.remove("appended");
      console.log(results);
      results.articles.forEach(function(result, index){
        let impressionsEl = document.createElement('section');
        impressionsEl.innerHTML = index + 1;
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
      })
    }
  })
}

function abc() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      console.log(results);
      results.articles.forEach(function(result, index){
        let impressionsEl = document.createElement('section');
        impressionsEl.innerHTML = index + 1;
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
      })
    }
  })
}

function bbc() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" + newsapi,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (results) => {
      console.log(results);
      results.articles.forEach(function(result, index){
        let impressionsEl = document.createElement('section');
        impressionsEl.innerHTML = index + 1;
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
      })
    }
  })
}
