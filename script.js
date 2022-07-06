let url = "https://api.chucknorris.io/jokes/random";

const factsParagraph = document.getElementById("factsData");
const avatarImg = document.getElementById("Avatar");
const button = document.getElementById("getJokes");

const fetchJokes = async () => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

const updateContainer = async () => {
  const data = await fetchJokes();
  factsParagraph.innerText = data.value;
};

button.addEventListener("click", updateContainer);
