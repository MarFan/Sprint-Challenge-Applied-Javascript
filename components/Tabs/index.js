// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
	.then(res => {
        res.data.topics.forEach(t  => {
            tabItem = document.createElement('div');
                tabItem.dataset.topic = t.split('.')[0];
            tabItem.classList.add('tab');
            tabItem.textContent = t;
            document.querySelector('.topics').appendChild(tabItem);
        })
    })
    .then(() => {
        createTabEvents();
    })


function createTabEvents() {
    const tabEvent = document.querySelectorAll('.tab').forEach(t => {
        t.addEventListener('click', (e) => {
            let selectedTopic = e.target.dataset.topic;
            document.querySelectorAll('.card').forEach(card => {
                if(card.dataset.topic !== selectedTopic){
                    //card.classList.add('hideMe');
                    TweenMax.to(card, .5, {autoAlpha: 0, display: 'none'})
                }else{
                    //card.classList.remove('hideMe');
                    TweenMax.to(card, .5, {autoAlpha: 1, display: 'block'})
                }
            })
        });
    });
}

