import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

// setting up my
const articleCard = document.createElement('div');
const headlineSec = document.createElement('div');
const authorSec = document.createElement('div');
const imgContainer = document.createElement('div');
const image = document.createElement('img');
const spanSec = document.createElement('span');

// setting class names, attributes and text
articleCard.classList.add('card');
headlineSec.classList.add('headline');
headlineSec.textContent = article.headline;
articleCard.appendChild(headlineSec);
authorSec.classList.add('author');
articleCard.appendChild(authorSec);
imgContainer.classList.add('img-container');
authorSec.appendChild(imgContainer);
image.src = article.authorPhoto;
imgContainer.appendChild(image);
spanSec.textContent = `By ${article.authorName}`;
authorSec.appendChild(spanSec);
return articleCard;
}


const cardAppender = (selector) => {

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
 
  let results = axios.get(`http://localhost:5000/api/articles`)

  results.then((value)=>{

    let list = value.data.articles
    for(let key in list){
      list[key].forEach(element => {
        let test = Card(element)
        let cardContainer = document.querySelector(selector)
        cardContainer.appendChild(test)
      });
    }

  })

}

export { Card, cardAppender }