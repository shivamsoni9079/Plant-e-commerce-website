 const plants = [
  {
    image: "plantsImages/aglaonema.png",
    subtitle: "Indoor Plant",
    title: "Aglaonema plant"
  },
  {
    image: "plantsImages/plantainlili.png",
    subtitle: "Outdoor Plant",
    title: "Plantain lili Plant"
  },
  {
    image: "plantsImages/agave.png",
    subtitle: "Mini Plant",
    title: "Aloe Vera"
  }
];

let currentIndex = 0;

const img = document.getElementById("slider-img");
const subtitle = document.querySelector(".small-text");
const title = document.querySelector("h2");
const nextBtn = document.getElementById("next");
const dots = document.querySelectorAll(".dot");

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= plants.length) {
        currentIndex = 0;
    }

    img.src = plants[currentIndex].image;
    subtitle.textContent = plants[currentIndex].subtitle;
    title.textContent = plants[currentIndex].title;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
});

const bestPlants = [
  {
    image: "plantsImages/aglaonema.png",
    heading: "We Have Small And Best O2 Plants Collection’s",
    para1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through photosynthesis.',
    para2: "Many plants can help filter out pollutants and toxins from the air and make the air cleaner."
  },
  {
    image: "plantsImages/agave.png",
    heading: "Beautiful Indoor Plant Collection",
    para1: "Indoor plants improve mood and air quality in your room.",
    para2: "They also add natural beauty and freshness."
  },
  {
    image: "plantsImages/cactus.png",
    heading: "Fresh Green Plants",
    para1: "Green plants reduce stress and improve environment.",
    para2: "A perfect addition for home decoration."
  },
  {
    image: "plantsImages/plantainlili.png",
    heading: "Beautiful Indoor Plant Collection",
    para1: "Indoor plants improve mood and air quality in your room.",
    para2: "They also add natural beauty and freshness."
  }
];

let currentBest = 0;

const bestImg = document.getElementById("best-otwo-img");
const bestHeading = document.getElementById("best-otwo-heading");
const bestPara1 = document.getElementById("best-otwo-para-one");
const bestPara2 = document.getElementById("best-otwo-para-two");
const nextBest = document.getElementById("nextbest");
const prevBest = document.getElementById("prevbest");
const bestDots = document.querySelectorAll(".best-otwo-dot");
const bestCount = document.querySelector(".count");

function updateBestSlide() {
    bestImg.src = bestPlants[currentBest].image;
    bestHeading.textContent = bestPlants[currentBest].heading;
    bestPara1.textContent = bestPlants[currentBest].para1;
    bestPara2.textContent = bestPlants[currentBest].para2;

    bestCount.textContent = `0${currentBest + 1}/0${bestPlants.length}`;

    bestDots.forEach(dot => dot.classList.remove("best-active"));
    bestDots[currentBest].classList.add("best-active");
}

nextBest.addEventListener("click", () => {
    currentBest = (currentBest + 1) % bestPlants.length;
    updateBestSlide();
});

prevBest.addEventListener("click", () => {
    currentBest = (currentBest - 1 + bestPlants.length) % bestPlants.length;
    updateBestSlide();
});