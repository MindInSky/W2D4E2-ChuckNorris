document.getElementById("button1").addEventListener("click", getJokes);

function getJokes(e) {
  let uList = document.getElementById("joke-list");
  uList.innerHTML = "";
  let jokes = document.getElementById("number");
  if (jokes.value != "") {
    e.preventDefault();
    url = `http://api.icndb.com/jokes/random/${jokes.value}`;

    xhr = new XMLHttpRequest();

    xhr.open("GET", `${url}`, true);

    xhr.onload = function() {
      if (this.status === 200) {
        const jokeList = JSON.parse(this.responseText);
        addJoke(jokeList);
      }
    };

    xhr.send();
  }
}

function addJoke(jokeList) {
  let x = jokeList.value;
  x.forEach(function(jokes, index) {
    console.log(x[index].joke);
    const list = document.getElementById("joke-list");
    console.log(list);
    const row = document.createElement("tr");
    row.innerHTML = `<li>${x[index].joke}</li>`;
    list.appendChild(row);
  });
}
