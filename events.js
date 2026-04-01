class Event {
    constructor(title, start, end, location, oversee, desc, repeat) {
        this.title = title;
        this.start = start;
        this.end = end;
        this.location = location;
        this.oversee = oversee;
        this.desc = desc;
        this.repeat = repeat;
        
    }
}
const introFacial = new Event("Intro to Drawing: Human Head and Facial Features", "April 20, 2026, 2pm", "5pm", "Hunterdon County Library", "Hunterdon County Library", "The workshop teaches its students how to draw the human head with correct proportions, focusing on individual facial features and the placement of the ears, hair, neck, and shoulders. Led by experienced instructor Susan Bromirski, it helps students develop observational skills and provides worksheets and resources to continue improving after the class.", false);
const taiChi = new Event("Taiji (Tai Chi) Qigong Classes for Health and Longevity with Instructor, David Grantham", "Tuesdays 6:30pm", "7:30pm", "Hunterdon Health & Wellness Center", "Hunterdon Health", "Students will learn the true meaning of Taiji and will practice various Qigong exercises, including the traditional Yang Style Taijiquan sequence, designed to maintain health, improve balance, increase energy and help overall well-being.", true)
const cruise = new Event("Cruising Clinton", "April 26, 2026, 11Am", "4pm", "Clinton Town", "The Guild of Clinton", "Enjoy classic and unique cars on East Main Street, a silent auction with wonderful offerings from local businesses and organizations, and music and entertainment!", false)

const eventListRepeat= [taiChi]
const eventListOne = [introFacial, cruise]
var active = 0

function running(){
    const listEvents = document.getElementById("listEvents");
    const selection = document.getElementById("selector").value;
    if(selection == "blank"){
        alert("Please fill out field");
    }
    else{
        if(selection == 'oneTime'){
            listEvents.replaceChildren()
            const bigTitle = document.createElement("h3");
            bigTitle.textContent = "One Time Events";
            listEvents.appendChild(bigTitle)
            for(var i of eventListOne){
                    const container = document.createElement("div");
                    container.classList.add("eventContainer");
                    const title = document.createElement("h2");
                    title.textContent = i.title;
                    const time = document.createElement("p");
                    time.textContent = `Time: ${i.start} - ${i.end}`;
                    const location = document.createElement("p");
                    location.textContent = `Location: ${i.location}`;
                    const oversee = document.createElement("p");
                    oversee.textContent = `Overseen by: ${i.oversee}`;
                    const desc = document.createElement("p");
                    desc.textContent = `Description: ${i.desc}`;
                    container.appendChild(title);
                    container.appendChild(time);
                    container.appendChild(location);
                    container.appendChild(oversee);
                    container.appendChild(desc);
                    listEvents.appendChild(container);
            }
        }
        else if(selection == 'repeat'){
            listEvents.replaceChildren()
            const bigTitle = document.createElement("h3");
            bigTitle.textContent = "Repeat Events";
            listEvents.appendChild(bigTitle)
            for(var i of eventListRepeat){
                    const container = document.createElement("div");
                    container.classList.add("eventContainer");
                    const title = document.createElement("h2");
                    title.textContent = i.title;
                    const time = document.createElement("p");
                    time.textContent = `Time: ${i.start} - ${i.end}`;
                    const location = document.createElement("p");
                    location.textContent = `Location: ${i.location}`;
                    const oversee = document.createElement("p");
                    oversee.textContent = `Overseen by: ${i.oversee}`;
                    const desc = document.createElement("p");
                    desc.textContent = `Description: ${i.desc}`;
                    container.appendChild(title);
                    container.appendChild(time);
                    container.appendChild(location);
                    container.appendChild(oversee);
                    container.appendChild(desc);
                    listEvents.appendChild(container);
            }
        }
        }
    }
