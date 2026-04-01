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
