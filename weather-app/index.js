const form = document.querySelector('#form');
form.onsubmit = function (event) {
	event.preventDefault()
}
const input = document.querySelector('#input');
const buttonFind = document.querySelector('#button');
const tbody = document.querySelector('#tbody');
const map = document.querySelector('#mapid');
const body = document.querySelector("body");
const myWeather = document.querySelector("#weather");
const storage = new Map();

let mymap;
let marker;

let keys = Object.keys(localStorage);
for(let key of keys) {
	fetch(`http://api.weatherstack.com/current?access_key=b397f298c1a0b7db79f668d3c47e27fb&query= ${key}`)
		.then(result => result.json())
		.then(data => {
			const {
				location: {name, country, lat, lon},
				current: {temperature}
			} = data
			storage.set(name, [name, country, temperature]);
			renderTbody()
		})
}

function renderTbody() {
	tbody.innerHTML = ''
	storage.forEach((value, key) => {
		const [city, country, temperature] = value
		const row = `<tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${temperature}</td>
            <td>${temteratureInFarengeit(temperature)}</td>
        </tr>`
		tbody.innerHTML = tbody.innerHTML + row
	})
}

function temteratureInFarengeit(temperature) {
	return ((temperature * 9/5) + 32)
}

buttonFind.addEventListener('click', function () {
	fetch(`http://api.weatherstack.com/current?access_key=b397f298c1a0b7db79f668d3c47e27fb&query= ${input.value}`)
.then(result => result.json())
		.then(data => {
			const {
				location: {name, country, lat, lon},
				current: {temperature}
			} = data
			let arr = [name, country, lat, lon, temperature]
			storage.set(name, [name, country, temperature]);
			localStorage.setItem(name, JSON.stringify(arr))

			renderTbody();

			if (!map.innerHTML) {
				mymap = L.map('mapid').setView([lat, lon], 13);
				L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
					maxZoom: 18,
					id: 'mapbox/streets-v11',
				}).addTo(mymap);
				marker = L.marker([lat, lon]).addTo(mymap);
			} else {
				marker = L.marker([lat, lon]).addTo(mymap);
			}
		})
})

let buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function () {
	storage.clear();
	tbody.innerHTML = ' ';
	map.innerHTML = '';
})


myWeather.addEventListener("click", function () {
	let lat;
	let lon;
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(position => {
			lat = position.coords.latitude;
			lon = position.coords.longitude;

			fetch(`http://api.weatherstack.com/current?access_key=b397f298c1a0b7db79f668d3c47e27fb&query= ${lat},${lon}`)
				.then(result => result.json())
				.then(data =>{
					const {
						location: {region, country},
						current: {temperature}
					} = data

					let arr = [region, country, lat, lon, temperature]
					localStorage.setItem(region, JSON.stringify(arr))

					storage.set(region, [region, country, temperature]);
					renderTbody();
				})

		}, error =>{
			console.log("error")
		})
	} else {
			console.log("not supported")
	}

})



