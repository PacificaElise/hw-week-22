
class View {
  constructor(){
    this.app = document.getElementById('app');
    this.tittle = this.createElement('h', 'title');
    this.tittle.textContent = 'Searh GIFs';
    this.app.prepend(this.tittle);
  }
  createElement(elementTag, elementClass){
    const element = document.createElement(elementTag);
    if(elementClass) {
      element.classList.add(elementClass);
    }
    return element;
  }
}

const container = document.querySelector('.container'),
      error = document.querySelector('.error'),
      button = document.querySelector('button'),
      input = document.querySelector(".searh-input");


button.addEventListener('click', this.searchGifs.bind(this));
input.addEventListener("keyup", function(e) {
      if (e.keyCode === 13) {
        document.querySelector('button').click();
      }
  });
  

async function searchGifs() {
  return await fetch(`https://api.giphy.com/v1/gifs/search?api_key=zbW1z2BPKsvJqOLOTVH5Z8tqi1oj37Zm&q=${encodeURIComponent (document.querySelector('input').value)}&limit=5&offset=0&rating=g&lang=ru`)
  .then (res => res.json())
  .then(res => {
    console.log(res);
    container.innerHTML = "";
    error.innerHTML = "";    
    {
      try {
        for (let data of res.data) {
        let img = document.createElement('img');
        img.setAttribute('src', data.images.downsized.url);
        container.append(img);
      }
      if (res.pagination.total_count===0) {
        throw new Error("Ничего не найдено :( <br> Попробуйте задать запрос по-другому");
      }
    } catch(er) {
      error.innerHTML = er.message; 
    } 
  }
  }) 
  }
  
  new View();

  