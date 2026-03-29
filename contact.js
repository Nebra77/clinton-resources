const add = document.getElementById("adding");
const messageForm = document.getElementById("messageForm");

function addings(){
    if(add.style.display === ""){
        add.style.display = 'block';
        messageForm.style.display = "";
    };
};



function contactings(){
    if(messageForm.style.display === ""){
        messageForm.style.display = 'block';
        add.style.display = "";

    };
}

function contacting(){
    const title = document.createElement("h2");
    const mess = document.createElement("input");
    const resp = document.createElement("input");
    const sub = document.createElement("button");
    title.textContent = "Send a message";
    title.id = "titleB";
    mess.placeholder = "Message";
    mess.id = "mess";
    mess.name = "mess";
    resp.placeholder = "Contact info:";
    resp.id = "resp";
    resp.name = "resp";
    sub.textContent = "Submit";
    sub.id = "subAdd";
    sub.type = "submit";
    document.getElementById("fill").append(title);
    document.getElementById("fill").append(mess);
    document.getElementById("fill").append(document.createElement("br"));
    document.getElementById("fill").append(resp);
    document.getElementById("fill").append(document.createElement("br"));
    document.getElementById("fill").append(sub);
}

