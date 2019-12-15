const form = document.querySelector('#form');
form.onsubmit = function (event) {
	event.preventDefault()
}
const input = document.querySelector('#input');
const buttonFind = document.querySelector('#button');
const tbody = document.querySelector('#tbody');
const map = document.querySelector('#mapid');
const body = document.querySelector("body");
const storage = new Map();

let mymap;
let marker;


function renderTbody() {
	tbody.innerHTML = ''
	storage.forEach((value, key) => {
		const [city, country, temperature] = value
		const row = `<tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${temperature}</td>
            <td>${temperature}</td>
        </tr>`
		tbody.innerHTML = tbody.innerHTML + row
	})
}

buttonFind.addEventListener('click', function () {
	fetch(`http://api.weatherstack.com/current?access_key=b397f298c1a0b7db79f668d3c47e27fb&query= ${input.value}`)
.then(result => result.json())
		.then(data => {
			const {
				location: {name, country, lat, lon},
				current: {temperature}
			} = data

			storage.set(name, [name, country, temperature]);

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
	mymap.remove();
	tbody.innerHTML = ' ';
	map.innerHTML = '';
	console.log(storage)
})

