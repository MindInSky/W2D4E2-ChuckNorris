document.getElementById("button1").addEventListener("click", getJokes);

function getJokes(e) {
  let uList = document.getElementById("joke-list");
  uList.innerHTML = "";
  let jokes = document.getElementById("number");
  if (jokes.value == "") {
    jokes.value = 1;
  }
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

document.getElementById("button2").addEventListener("click", getPersonalJokes);
function getPersonalJokes(e) {
  let uList = document.getElementById("joke-list");
  uList.innerHTML = "";
  let jokes = document.getElementById("number");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let x = [];
  e.preventDefault();
  if (jokes.value == "") {
    jokes.value = 1;
  }
  persJoke(jokes, firstName, lastName, e);
}

function persJoke(jokes, firstName, lastName, e) {
  let n = jokes;
  let f = firstName;
  let l = lastName;
  if (n.value != "") {
    e.preventDefault();
    url = `http://api.icndb.com/jokes/random?firstName=${
      f.value
    }&amp;lastName=${l.value}`;
    xhr = new XMLHttpRequest();

    xhr.open("GET", `${url}`, true);

    xhr.onload = function() {
      if (this.status === 200) {
        const jokeList = JSON.parse(this.responseText);
        addJoke2(jokeList);
      }
    };

    xhr.send();
  }
}

function addJoke(jokeList) {
  let x = jokeList.value;
  x.forEach(function(jokes, index) {
    const list = document.getElementById("joke-list");
    const row = document.createElement("tr");
    row.innerHTML = `<li class="nine-columns">${x[index].joke}
    <button class="three-columns delete" id="delte">Delete</button>
    </li>`;
    list.appendChild(row);
  });
}

function addJoke2(jokeList) {
  let x = jokeList.value;
  console.log(x);
  const list = document.getElementById("joke-list");
  const row = document.createElement("tr");
  row.innerHTML = `<li class="nine-columns">${x.joke}
    <button class="three-columns delete" id="delte">Delete</button>
    </li>`;
  list.appendChild(row);
}

document.getElementById("joke-list").addEventListener("click", function(e) {
  e.preventDefault();

  removeJoke(e.target);
});

function removeJoke(target) {
  target.parentElement.parentElement.remove();
}
