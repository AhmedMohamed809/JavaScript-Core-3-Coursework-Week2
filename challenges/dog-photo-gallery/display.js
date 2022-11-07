const buttonDisplay = document.getElementById("displayButton");
const body = document.getElementsByName("body");
buttonDisplay.addEventListener("click", (nextImg) => {
  fetch("https://dog.ceo/api/breeds/image/randomcsd") // fetch the API
    .then((res) => res.json()) // convert data to  use JSON
    .then((data) => getImgesFromApi(data))
    .catch((err) => displayError(err));
});
// get and create random Img from API
function getImgesFromApi(data) {
  const nextImg = document.createElement("img"); // create  img tag
  const listOfImg = document.getElementById("listImg");
  const oneOfImgBylist = document.createElement("li"); // create  li tag
  nextImg.setAttribute("src", data.message); // set prameters to IMG tag
  listOfImg.appendChild(oneOfImgBylist);
  oneOfImgBylist.appendChild(nextImg);
}
// display error massge
function displayError(err) {
  console.log(err);
  const massg = document.createElement("h1");
  massg.innerText = `O O O P S we have problem in the API ${err.message} `;
  body.appendChild(massg);
}
