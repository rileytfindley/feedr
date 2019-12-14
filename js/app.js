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
        impressionsEl.innerHTML = index + 1;
        let title = result.title;
        titleEl.innerHTML = title;
        let content = result.description;
        contentEl.innerHTML = content;
        let url = result.url;
        var urlEl = document.querySelector('a[id="urlEl"]');
        urlEl.href = url;
        let image = result.urlToImage;
        var imageElement = document.querySelector('img[id="imageEl"]');
        imageElement.src = image;
        //$("ul").append("<li>"+result.content.title+"</li>")
        //break;
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
