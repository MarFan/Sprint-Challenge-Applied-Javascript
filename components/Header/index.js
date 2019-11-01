// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let myTemp = '98\u00B0';
parent = document.querySelector('.header-container');

window.navigator.geolocation.getCurrentPosition(
    (pos) => {
        myLat = pos.coords.latitude;
        myLong = pos.coords.longitude;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=c179ff3c121ab234c61e31416c48c4fd`)
            .then(res => {
                myTemp = `${Math.floor(res.data.main.temp)}\u00B0`;
            })
            .then(() => {
                parent.appendChild(Header());
            })
            .catch(err => {
                myTemp = '98\u00B0';
                parent.appendChild(Header());
            })
    }
)

function Header() {

    // create the header
	const newHeader = document.createElement('div');
	const dateSpan = document.createElement('span');
	const headerTitle = document.createElement('h1')
	const headerTemp = document.createElement('span');

	newHeader.classList.add('header');
    dateSpan.classList.add('date');
    headerTemp.classList.add('temp');

	headerTemp.textContent = myTemp;
    headerTitle.textContent = 'Lambda Times';
    dateSpan.textContent = new Date().toLocaleDateString("en-US", {month: 'long', day: 'numeric', year: 'numeric'});

	newHeader.appendChild(dateSpan);
	newHeader.appendChild(headerTitle);
	newHeader.appendChild(headerTemp);

	return newHeader;

}