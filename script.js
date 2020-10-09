var spelers = [
{image: "img/2020-06-03 14_41_21-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Nicolai Jorgensen"},
{image: "img/2020-06-03 14_43_03-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Robin van Persie"},
{image: "img/2020-06-03 14_43_29-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Steven Berghuis"},
{image: "img/2020-06-03 14_44_51-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Luis Sinisterra"},
{image: "img/2020-06-03 14_45_24-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Sam Larsson"},
{image: "img/2020-06-03 14_46_14-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Cheick Toure"},
{image: "img/2020-06-03 14_46_37-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Jens Toornstra"},
{image: "img/2020-06-03 14_47_03-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Tonny Vilhena"},
{image: "img/2020-06-03 14_47_19-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Yassin Ayoub"},
{image: "img/2020-06-03 14_47_39-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Renato Tapia"},
{image: "img/2020-06-03 14_47_57-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Ridgeciano Haps"},
{image: "img/2020-06-03 14_48_23-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Jeremiah St.Juste"},
{image: "img/2020-06-03 14_48_41-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Sven van Beek"},
{image: "img/2020-06-03 14_49_04-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Jan Arie van der Heijden"},
{image: "img/2020-06-03 14_49_49-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Eric Botteghin"},
{image: "img/2020-06-03 14_50_06-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Tyrell Malacia"},
{image: "img/2020-06-03 14_50_26-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Bart Nieuwkoop"},
{image: "img/2020-06-03 14_51_20-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Justin Bijlow"},
{image: "img/2020-06-03 14_51_47-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Kenneth Vermeer"},
{image: "img/2020-06-03 14_52_15-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Ramon ten Hove"},
];

// make kopie van spelers in images (slice)

var images = [];
var names = [];
var imageRow = [];
var nameRow = [];
var indexArrayImg = []

for (var i = 0; i < spelers.length; i++) {
	images.push(spelers[i].image);
	names.push(spelers[i].name);
}

// zolang images nog een element bevat: vul ee element met een image, verwijder daarna ook de image uit images
function displayImages() {
		// restartLoop:
	while  (images.length > 0 ){
		let index = Math.floor(Math.random() * images.length);
		var img = document.createElement("img");
		let randomImage = images[index];
		// if (indexArrayImg.includes(index)) {
		// 	indexArrayImg.splice(index, 1);
		// 	console.log(index + "	" + indexArrayImg)
		// 	continue restartLoop
		// }
		indexArrayImg.push(index)
		img.setAttribute("src", randomImage);
		document.getElementById("image-container").appendChild(img);
		img.id = "img";
		img.className = "afb";
		img.setAttribute("data-spelerNaam", names[index])
	    imageRow.push(randomImage);
		img.addEventListener("click", function() {
			console.log (event.target /*imageRow[randomImage]*/);
		});
		images.splice(index, 1);
	};
}

console.log(indexArrayImg)

// function selectImg() {
	// document.getElementById("img").style.border = "thick solid blue";
// }

function displayName() {
	while  (names.length > 0){
		let index2 = Math.floor(Math.random() * names.length);
		const randomName = names[index2];
		var name = document.createElement("h2");
		name.innerHTML = randomName
		document.getElementById("name-container").appendChild(name);
		name.id = 'name';
		name.addEventListener("click", myFunction2);
	    nameRow.push(randomName);
		names.splice(index2, 1);
	};
}

function myFunction2() {
  alert ("Hello World!");
}

displayImages();
displayName()