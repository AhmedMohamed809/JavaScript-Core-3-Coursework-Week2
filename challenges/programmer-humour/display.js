const body = document.getElementById("body");
fetch("https://xkcd.now.sh/?comic=latest")
  .then((res) => res.json()) // convert data to  use JSON
  .then((data) => getImgesFromApi(data))
  .catch((err) => {
    // display error massge
    const displayErr = document.createElement("h1");
    displayErr.innerText = `wOOps there are some Error : ${err}`;
    body.appendChild(displayErr);
  });
// get img from data in API
function getImgesFromApi(data) {
  console.log(data);
  const getImg = document.createElement("img"); // create  img tag
  getImg.setAttribute("src", data.img);
  body.appendChild(getImg);
}
