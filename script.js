var spelers = [
{image: "img/2020-06-03 14_41_21-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Nicolai Jorgensen", id:1},
{image: "img/2020-06-03 14_43_03-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Robin van Persie", id:2},
{image: "img/2020-06-03 14_43_29-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Steven Berghuis", id:3},
{image: "img/2020-06-03 14_44_51-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Luis Sinisterra", id:4},
{image: "img/2020-06-03 14_45_24-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Sam Larsson", id:5},
{image: "img/2020-06-03 14_46_14-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Cheick Toure", id:6},
{image: "img/2020-06-03 14_46_37-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Jens Toornstra", id:7},
{image: "img/2020-06-03 14_47_03-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Tonny Vilhena", id:8},
{image: "img/2020-06-03 14_47_19-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Yassin Ayoub", id:9},
{image: "img/2020-06-03 14_47_39-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Renato Tapia", id:10},
{image: "img/2020-06-03 14_47_57-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Ridgeciano Haps", id:11},
{image: "img/2020-06-03 14_48_23-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Jeremiah St.Juste", id:12},
{image: "img/2020-06-03 14_48_41-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Sven van Beek", id:13},
{image: "img/2020-06-03 14_49_04-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Jan Arie van der Heijden", id:14},
{image: "img/2020-06-03 14_49_49-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Eric Botteghin", id:15},
{image: "img/2020-06-03 14_50_06-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Tyrell Malacia", id:16},
{image: "img/2020-06-03 14_50_26-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Bart Nieuwkoop", id:17},
{image: "img/2020-06-03 14_51_20-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Justin Bijlow", id:18},
{image: "img/2020-06-03 14_51_47-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Kenneth Vermeer", id:19},
{image: "img/2020-06-03 14_52_15-Selectie 2018 – 2019 – Feyenoord in Beeld.png", name: "Ramon ten Hove", id:20},
];

// make kopie van spelers in images (slice)
var idSpeler = [];
var images = [];
var names = [];
var imageRow = [];
var nameRow = [];
var indexArrayImg = []
var indexArrayName = []

for (var i = 0; i < spelers.length; i++) {
	images.push(spelers[i].image);
	names.push(spelers[i].name);
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progressBarr");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// zolang images nog een element bevat: vul een element met een image, verwijder daarna ook de image uit images
function displayImages() {
		// var tellerArray = 0
		var teller = 0
		var imgChosen = false
	while  (images.length > 0 ){
		let index = Math.floor(Math.random() * images.length);
		var img = document.createElement("img");
		let randomImage = images[index];
		indexArrayImg.push(index)
		img.setAttribute("src", randomImage);
		document.getElementById("image-container").appendChild(img);
		teller++;
		img.id = "img" + teller;
		img.className = "afb";
		img.setAttribute("data-spelerNaam", names[index])
	    imageRow.push(randomImage);
		// tellerArray.push(teller);
		// console.log(tellerArray)
		img.addEventListener("click", selectImg(teller, imgChosen));
		images.splice(index, 1);
	};
}
// select and unselect
function selectImg(teller, imgChosen) {
	return function(){
		if (imgChosen == true) {
			document.getElementById("img" + teller).style.border = "solid black";
			imgChosen = false

		// } else if () {
	
		} else {
			console.log("img" + teller)
			document.getElementById("img" + teller).style.border = "thick solid blue";
			imgChosen = true
		}
	}
}

// document.getElementById("img" + teller).style.visibility = "hidden";

function displayName() {
		var teller = 0
	while  (names.length > 0){
		let index = Math.floor(Math.random() * names.length);
		var name = document.createElement("h2");
		let randomName = names[index];
		indexArrayName.push(index)
		name.innerHTML = randomName
		document.getElementById("name-container").appendChild(name);
		teller++;
		name.id = "name" + teller;
		name.className = "naam";
	    nameRow.push(randomName);
		name.addEventListener("click", selectName(teller));
		names.splice(index, 1);
	};
}

function selectName(teller) {
	return function(){
		if (document.getElementById("name" + teller).style.border == "thick solid blue") {
			console.log(teller)
			document.getElementById("name" + teller).style.border = "solid black";
		// } else if () {

		} else {
		console.log("name" + teller)
		document.getElementById("name" + teller).style.border = "thick solid blue";
		}
	}
}

displayImages();
displayName()