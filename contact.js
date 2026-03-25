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
    const oversee = document.createElement("input");
    const desc = document.createElement("textarea")
    const sub = document.createElement("button");
    title.textContent = "Add a resource";
    title.id = "s";
    eventName.placeholder = "Resource/Event Name";
    eventName.id = "eventName";
    eventName.name = "eventName"
    eventDate.placeholder = "Date of Event (Na if none)";
    eventDate.id = "dateOf";
    eventDate.name = "dateOf";
    oversee.placeholder = "Organization name"
    oversee.id = "oversee";
    oversee.name = "oversee";
    desc.placeholder = "Add a short description";
    desc.id = "desc";
    desc.name = "desc";
    sub.id = "subAdd";
    sub.textContent = "Submit";
    sub.type = "submit";
    document.getElementById("fill").append(title);
    document.getElementById("fill").append(eventName);
    document.getElementById("fill").append(document.createElement("br"));
    document.getElementById("fill").append(eventDate);
    document.getElementById("fill").append(document.createElement("br"));
    document.getElementById("fill").append(oversee);
    document.getElementById("fill").append(document.createElement("br"));
    document.getElementById("fill").append(desc);
    document.getElementById("fill").append(document.createElement("br"));
    document.getElementById("fill").append(sub);
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
    eventName.placeholder = "Message";
    eventName.id = "q";
    document.getElementById("fill").append(title);
    document.getElementById("fill").append(eventName)
}

