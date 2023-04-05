const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.id = "bgImage";
bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(${bgImage.src})`;
