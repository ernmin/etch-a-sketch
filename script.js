document.addEventListener('DOMContentLoaded', function() {
    function createSquare() {
        const box = document.createElement("div");
        const container = document.querySelector(".container");
        box.classList.add("box");
        box.style.border = "medium solid black";
        container.appendChild(box);
    }

    for(let i = 0; i < 4; i++){
        createSquare();
    }
    

});