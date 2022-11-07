const body = document.getElementById("body");
fetch("https://xkcd.now.sh/?comic=latest")
  .then((res) => res.json())
  .then((data) => getImgesFromApi(data))
  .catch((err) => {
    const displayErr = document.createElement("h1");
    displayErr.innerText = `wOOps there are some Error : ${err}`;
    body.appendChild(displayErr);
  });
function getImgesFromApi(data) {
  console.log(data);
  const getImg = document.createElement("img");
  getImg.setAttribute("src", data.img);
  body.appendChild(getImg);
}
