const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector("https://media.discordapp.net/attachments/872496454114115644/1183866580854124694/IMG_6146.gif?ex=6589e4ac&is=65776fac&hm=5e5661fe35b8f6d8a0b82e971252b5a2ce262490958946ecfb0b6df7b61a56dc&.gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you soon!";
  gif.src =
    "https://media.discordapp.net/attachments/872496454114115644/1183866989375148164/IMG_6147.gif?ex=6589e50d&is=6577700d&hm=9dbc39e1b9bb3cb32c05a89ee305d0642d0dd499f7370b800fb01fedcd6b62b1&.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
