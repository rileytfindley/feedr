//onLoad
//ajax or fetch or .get to load api

function onLoad() {
  site = $.ajax({
    url:"https://newsapi.org/v2/top-headlines?sources=CNN&apiKey=" + newsapi,
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
        let titleEl = document.createElement('h3');
        titleEl.innerHTML = title;
        articleContentEl.append(titleEl);
        let url = result.url;
        let urlEl = document.createElement('a');
        urlEl.setAttribute('href', url);
        articleContentEl.append(urlEl);
        let content = result.description;
        let contentEl = document.createElement('h6');
        contentEl.innerHTML = content;
        articleContentEl.append(contentEl);
      })
    }
  })
  // $.get("https://newsapi.org/v2/top-headlines?sources=CNN&apiKey=" + newsapi, function(results){
  //   console.log(results);
  //   results.data.feed.forEach(function(result){
  //     let title = result.title;
  //     titleEl.innerHTML = title;
  //     let content = result.description;
  //     contentEl.innerHTML = content;
  //     let url = result.url;
  //     document.getElementById(urlEl).href = url;
  //     let image = result.urlToImage; //set up to src in feedr
  //     document.getElementById(imageEl).src = image;
  //     $("ul").append("<li>"+result.content.title+"</li>")
  //   })
  // })
}
window.onload = onLoad;
