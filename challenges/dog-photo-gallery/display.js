const buttonDisplay = document.getElementById("displayButton");
const body = document.getElementsByName("body");
buttonDisplay.addEventListener("click", (nextImg) => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => getImgesFromApi(data))
    .catch((err) => displayError(err));
});

function getImgesFromApi(data) {
  const nextImg = document.createElement("img");
  const listOfImg = document.getElementById("listImg");
  const oneOfImgBylist = document.createElement("li");
  nextImg.setAttribute("src", data.message);
  listOfImg.appendChild(oneOfImgBylist);
  oneOfImgBylist.appendChild(nextImg);
}

function displayError(err) {
  console.log(err);
  const massg = document.createElement("h1");
  massg.innerText = `O O O P S we have problem in the API ${err.message} `;
  body.appendChild(massg);
}
