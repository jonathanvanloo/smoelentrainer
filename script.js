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
var counter = 0;

for (var i = 0; i < spelers.length; i++) {
	images.push(spelers[i].image);
	names.push(spelers[i].name);
}

// zolang images nog een element bevat: vul ee element met een image, verwijder daarna ook de image uit images
function displayimages() {
	while  (images.length > 0 ){
		let index = Math.floor(Math.random() * images.length);
		let randomElement = images[index];
		var img = document.createElement("img");
		img.setAttribute("src", randomElement);
		document.getElementById("image-container").appendChild(img);
		img.id = "img" + counter;
		img.className = "afb";
		document.getElementById("img" + counter).addEventListener("click", selectImg);
	    counter++;
		images.splice(index, 1);
	};
}

function selectImg() {
	alert ("Hello World!" + counter);
	// document.getElementById("img").style.border = "thick solid blue";
}

while  (names.length > 0){
	let index2 = Math.floor(Math.random() * names.length);
	const randomElement2 = names[index2];
	var h2 = document.createElement("h2");
	h2.innerHTML = randomElement2
	document.body.appendChild(h2);
	h2.id = 'h2';
	h2.addEventListener("click", myFunction2);
	names.splice(index2, 1);
};


function myFunction2() {
  alert ("Hello World!");
}

displayimages();
