function addings(){
    const filler = document.getElementById("fill")
    if(filler.textContent.trim()==='' && filler.textContent.trim()!=="Send a message"){
        adding();
    }
    else if(filler.textContent.trim()==="Send a message"){
        filler.replaceChildren();
        adding();
    }
}

function adding(){
    const title = document.createElement("h2");
    const eventName = document.createElement("input");
    const eventDate = document.createElement("input");
    const br = document.createElement("br")
    title.textContent = "Add a resource";
    title.id = "s"
    eventName.placeholder = "Event Name";
    eventName.id = "q"
    eventDate.placeholder = "Date of Event"
    eventDate.id = "o"
    document.getElementById("fill").append(title);
    document.getElementById("fill").append(eventName);
    document.getElementById("fill").append(br);
    document.getElementById("fill").append(eventDate);
}

function contactings(){
    const filler = document.getElementById("fill")
    if(filler.textContent.trim()==='' && filler.textContent.trim()!=="Add a resource"){
        contacting()
    }
    else if(filler.textContent.trim()!==""){
        filler.replaceChildren();
        contacting();
    }
}

function contacting(){
    const title = document.createElement("h2");
    const eventName = document.createElement("input");
    title.textContent = "Send a message";
    title.id = "s";
    eventName.placeholder = "Event Name";
    eventName.id = "q";
    document.getElementById("fill").append(title);
    document.getElementById("fill").append(eventName)
}