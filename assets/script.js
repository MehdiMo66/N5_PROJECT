
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Img + Text
const banner = document.getElementById("banner");
let index = 0;

const slide = document.createElement("img");
slide.classList.add("banner-img");
slide.src = `assets/images/slideshow/${slides[index].image}`;
banner.appendChild(slide);

const bannerTitle = document.createElement("p");
bannerTitle.innerHTML = slides[index].tagLine;
banner.appendChild(bannerTitle);

//Dots
const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span");
	dot.classList.add("dot")
	dot.classList.add(`dot${i}`)
	dots.appendChild(dot)
}

let dotSelected = document.querySelector(`.dot${index}`);
dotSelected.classList.add("dot_selected");

//ARROWS
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


function ArrowDotCLick(index) {
	dotSelected.classList.remove(`dot_selected`);
	slide.src = `assets/images/slideshow/${slides[index].image}`;
	bannerTitle.innerHTML = slides[index].tagLine;
	dotSelected = document.querySelector(`.dot${index}`);
	dotSelected.classList.add("dot_selected");
}


function arrowClick(direction) {
	switch (direction) {
		case "left":
			index--;
			if (index < 0) {
				index = slides.length - 1;
			}
			break;
		case "right":
			index++;
			if (index > slides.length - 1) {
				index = 0;
			}
			break;
		}
		
	ArrowDotCLick(index)
	}

arrowLeft.addEventListener("click", () => {
	arrowClick("left");
});
arrowRight.addEventListener("click", () => {
	arrowClick("right");
});


// Dots click 

for (let i = 0; i < slides.length ; i++) {
	let dot = document.querySelector(`.dot${i}`)
	dot.addEventListener("click", () => {
		ArrowDotCLick(i);
	});
}
