class Resources {
    constructor(name, type, description){
        this.name = name,
        this.type = type,
        this.description = description
    }
}

function display(){
    const inner = document.getElementById('recourceDisplay');
    if(inner.textContent.trim() === ''){
        displaying();
    }
}

function displaying(){
    for(i = 0; i<3; i++) {
    const div = document.createElement("div");
    div.classList.add("thingy")
    const title = document.createElement("h1");
    title.textContent = "Hello";
    div.appendChild(title)
    
    document.getElementById("recourceDisplay").append(div);
}}
