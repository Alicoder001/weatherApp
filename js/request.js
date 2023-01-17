// const weatherKey = "96b947a45d33d7dc1c49af3203966408";
// const unsplashKey = "QrOd5aoq5GxWD3kTyGcl1YcolFwVpuxs94RB4JRg3ms";
// let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${weatherKey}`;
// let unsplashApi = `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${unsplashKey}`;
const indicatorEl = document.getElementById("indicatorEl");
const getData = async (api) => {
	loader(true);
	const request = await fetch(api);
	const data = request.json();
	loader(false);
	return data;
};
const getImage = async (api) => {
	const request = await fetch(api);
	const data = request.json();
	Error("Something went wrong");
	return data;
};
