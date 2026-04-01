class Place {
    constructor(title, location, desc, image) {
        this.title = title;
        this.location = location;
        this.desc = desc;
        this.image = image;
    }
}

const jimmy = new Place("Jimmy's Coffeehouse", "44 Main St", "A very cozy and welcoming coffeeshop right on the edge of the Main Street. It serves a variety of food in the mornings and incredible drinks, incuding refreshers and milkshakes, all day.", "../images/jimmy.jpg")
const redMill = new Place("Red Mill Museum", "56 Main St", "The Red Mill Museum is a local museum that features exhibits on the history of Clinton and the surrounding area. It is housed in a historic red mill building that dates back to the 19th century.", "../images/redMill.jpg")


const locations = [jimmy, redMill]

const locationContainer = document.getElementById("locationContainer");

for(var i of locations){
    locationContainer.innerHTML += `
        <div class="location">
            <img src="${i.image}" alt="${i.title}">
            <h2>${i.title}</h2>
            <p><strong>Location:</strong> ${i.location}</p>
            <p><strong>Description:</strong> ${i.desc}</p>
        </div>
    `;
}