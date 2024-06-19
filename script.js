document.addEventListener('DOMContentLoaded', function() {
    const rowlength = 16;
    const container = document.querySelector(".container");

    for(let i = 0; i < rowlength; i++){
        createRow();
    }
    //row.appendChild(box);
    let allBoxes = document.querySelectorAll('.box');
    for(let numOfBox = 0; numOfBox < allBoxes.length; numOfBox++){
        allBoxes[numOfBox].addEventListener('mouseover', function(){
            allBoxes[numOfBox].style.backgroundColor = "cyan";
        });
        allBoxes[numOfBox].addEventListener('click', function(){
            allBoxes[numOfBox].style.backgroundColor = "";
        });
    }

    function createRow(){
        const row = document.createElement("div");
        row.classList.add("rowbox");
        container.appendChild(row);
        for(let i = 0; i < rowlength; i++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.border = "medium solid black";
            row.appendChild(box);
        }
    }
    

});