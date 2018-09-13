// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
let data;

function reqListener() {
  let data = JSON.parse(this.responseText);
  console.log(data);
  data.forEach(each => {
    displayCard(each);
  });
}

// Open a new connection, using the GET request on the URL endpoint
request.addEventListener("load", reqListener);
request.open(
  "GET",
  "https://api.spacexdata.com/v2/launches/?pretty=true",
  true
);

// Send request
request.send();

function displayCard(launch) {
  const missionName = launch.mission_name;
  const rocketName = launch.rocket.rocket_name;
  const launchDate = launch.launch_date_utc;
  const details = launch.details;
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  let cardTitle = document.createElement("h5");
  let cardSubTitle = document.createElement("h6");
  let cardText = document.createElement("p");
  let cardDetails = document.createElement("p");
  cardTitle.textContent = missionName;
  cardSubTitle.textContent = rocketName;
  cardText.textContent = launchDate;
  cardDetails.textContent = details;
  const launchList = document.getElementById("launchList");
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardDetails);
  launchList.appendChild(cardBody);
}
