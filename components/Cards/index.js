// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
	.then(res => {
        const articles = Object.entries(res.data.articles);
        articles.forEach(a => {
            let articleTopic = a[0];
            a[1].forEach(art => {
                cardContainer.appendChild(ArticleCard(articleTopic, art));
            });    
        });
    })

function ArticleCard(topic, cardObj) {
    const newCard = document.createElement('div');
        newCard.dataset.topic = topic;
	const headLine = document.createElement('div');
	const author = document.createElement('div');
	const imgContainer = document.createElement('div');
	const authorImg = document.createElement('img');
	const authorSpan = document.createElement('span');

	newCard.classList.add('card');
	headLine.classList.add('headLine');
	author.classList.add('author');
	imgContainer.classList.add('img-container');

	headLine.textContent = cardObj.headline;
	authorImg.src = cardObj.authorPhoto;
	authorSpan.textContent = cardObj.authorName;

	newCard.appendChild(headLine);
	newCard.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(authorImg);
	author.appendChild(authorSpan);

	return newCard;
}