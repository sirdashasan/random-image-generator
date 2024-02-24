const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 10; //10 satır olmasını istiyoruz.

for (let i = 0; i < rows * 3; i++) {
  //her satırda 3 tane resim olacak
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
