//.1////////////////////////////////////////////////////////////////
function deleteButton() {
            const button = document.getElementById("delete-me");
            button.remove();
        }



//.2////////////////////////////////////////////////////////////////
const img = document.createElement('img');
img.src = 'https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A';
img.alt = 'Random Image';
document.body.appendChild(img);



//.3, 4, 5////////////////////////////////////////////////////////////////
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "images/1.PNG",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "images/2.PNG",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "images/3.PNG",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "images/4.PNG",
    actor: "Tom Felton",
  },
];

const charactersList = document.getElementById("characters-list");

charactersList.innerHTML = characters
  .map(
    (char, index) => `
      <div class="character-card" id="char-${index}">
        <h3>${char.first_name} ${char.last_name}</h3>
        <p>House: ${char.house}</p>
        <img src="${char.image}" alt="${char.first_name}" class="character-image">
        <button class="delete-btn" onclick="removeCharacter(${index})">წაშლა</button>
        <button class="info-btn" onclick="showInfo(${index})">ინფო</button>
        <p id="info-${index}" class="character-info">Actor: ${char.actor}</p>
      </div>
    `
  )
  .join("");

function removeCharacter(index) {
  document.getElementById(`char-${index}`).remove();
}

function showInfo(index) {
  const infoElement = document.getElementById(`info-${index}`);
  infoElement.style.display = infoElement.style.display === "none" ? "block" : "none";
}