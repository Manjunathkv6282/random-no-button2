const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Pnallaha 🙂‍↕️😘 ";
  gif.src = "https://media.giphy.com/media/2ux0lCFn3RstXYZzrF/giphy.gif?cid=790b761170699cyffuh4346v4vz2dql75t969z7sxmkxxyxn&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Apply the random positions to the button
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
