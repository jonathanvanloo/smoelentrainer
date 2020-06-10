
var spelers = 
[["img/2020-06-03 14_41_21-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Nicolai Jorgensen"], 
["img/2020-06-03 14_43_03-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Robin van Persie"], 
["img/2020-06-03 14_43_29-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Steven Berghuis"], 
["img/2020-06-03 14_44_51-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Luis Sinisterra"], 
["img/2020-06-03 14_45_24-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Sam Larsson"], 
["img/2020-06-03 14_46_14-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Cheick Toure"], 
["img/2020-06-03 14_46_37-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Jens Toornstra"], 
["img/2020-06-03 14_47_03-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Tonny Vilhena"], 
["img/2020-06-03 14_47_19-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Yassin Ayoub"], 
["img/2020-06-03 14_47_39-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Renato Tapia"], 
["img/2020-06-03 14_47_57-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Ridgeciano Haps"], 
["img/2020-06-03 14_48_23-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Jeremiah St.Juste"],
["img/2020-06-03 14_48_41-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Sven van Beek"], 
["img/2020-06-03 14_49_04-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Jan Arie van der Heijden"], 
["img/2020-06-03 14_49_49-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Eric Botteghin"], 
["img/2020-06-03 14_50_06-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Tyrell Malacia"], 
["img/2020-06-03 14_50_26-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Bart Nieuwkoop"], 
["img/2020-06-03 14_51_20-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Justin Bijlow "], 
["img/2020-06-03 14_51_47-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Kenneth Vermeer"], 
["img/2020-06-03 14_52_15-Selectie 2018 – 2019 – Feyenoord in Beeld.png", "Ramon ten Hove"]];

const randomElement1 = spelers[Math.floor(Math.random() * spelers.length)];
document.getElementById("img1").src = randomElement1[0];
document.getElementById("name1").innerHTML = randomElement1[1];
console.log(randomElement1)

const randomElement2 = spelers[Math.floor(Math.random() * spelers.length)]
document.getElementById("img2").src = randomElement2[0];
document.getElementById("name2").innerHTML = randomElement2[1];
console.log(randomElement2)

const randomElement3 = spelers[Math.floor(Math.random() * spelers.length)];
document.getElementById("img3").src = randomElement3[0];
document.getElementById("name3").innerHTML = randomElement3[1];
console.log(randomElement3)

const randomElement4 = spelers[Math.floor(Math.random() * spelers.length)];
document.getElementById("img4").src = randomElement4[0];
document.getElementById("name4").innerHTML = randomElement4[1];
console.log(randomElement4)

const randomElement5 = spelers[Math.floor(Math.random() * spelers.length)];
document.getElementById("img5").src = randomElement5[0];
document.getElementById("name5").innerHTML = randomElement5[1];
console.log(randomElement5)

var randomElement = [randomElement1, randomElement2, randomElement3, randomElement4, randomElement5]
console.log(randomElement)
var dubbel =  spelers.filter(function(randomElement) {
	return randomElement.img[1] == "Robin van Persie";
});

function click(id) {
    var background = document.getElementById(id).style.backgroundColor;
    document.getElementById(id).style.backgroundColor = "rgb(255, 255, 255)";
    // document.getElementById(id).style.borderColor = "black";
    if (background !== "rgb(0,191,255)") {
        document.getElementById(id).style.backgroundColor = "rgb(0,191,255)";
    } else if (background == "rgb(0,191,255)") {
        document.getElementById(id).style.backgroundColor = "rgb(255, 255, 255)";
    }
}

// for (var i = 1; i < 6; i++) {
// 	const randomElement = spelers[Math.floor(Math.random() * spelers.length)];
// 	console.log(randomElement)
// 	document.getElementById("img" + i).src = randomElement[0];
// 	document.getElementById("name" + i).innerHTML = randomElement[1];
//     spelers.indexOf(randomElement);
//     console.log(spelers.indexOf(randomElement));
// }