const formEl = document.querySelector("form");
const btn = document.querySelector(".btn");
const weatherKey = "96b947a45d33d7dc1c49af3203966408";
const main = document.getElementById("main");

// const unsplashKey = "QrOd5aoq5GxWD3kTyGcl1YcolFwVpuxs94RB4JRg3ms";

// let unsplashApi = `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${unsplashKey}`;
formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	const nameEl = formEl.input.value.trim();
	let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${nameEl}&units=metric&appid=${weatherKey}`;

	getData(weatherApi).then((data) => {
		updateUL(data);
		console.log(data);
	});
});

function loader(data) {
	if (data) {
		indicatorEl.innerHTML = `<p class="loadingText">Loading...</p>
	<div class="loader">
		<div class="inner one"></div>
		<div class="inner two"></div>
		<div class="inner three"></div>
	</div>`;
	} else {
		indicatorEl.innerHTML = "";
	}
}
function updateUL(weather) {
	main.innerHTML = `<div class="mainBlock">
    <h1 class="cityName">${weather.name}</h1>
    <div class="infoBlock">
        <div class="infoTextBlock">
            <div class="textBLock">
                <h2 class="stateName">${weather.sys.country}</h2>
                <h2></h2>
                <h2 class="dateTitle">September 20,2023</h2>
            </div>
            <div class="imgBLock">
                <img
                    src="http://openweathermap.org/img/wn/${
						weather.weather[0].icon
					}@2x.png"
                    alt="" />
                <p class="imgText">${weather.weather[0].main}</p>
            </div>
        </div>
        <div class="tempBLock">
            <h1 class="mainTemp">${Math.round(weather.main.temp)}</h1>
            <h3 class="minMaxTemp">5 /<span> 25</span></h3>
        </div>
    </div>
</div>
`;
}
