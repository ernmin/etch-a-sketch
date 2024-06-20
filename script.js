document.addEventListener('DOMContentLoaded', function() {
    let rowlength = 16;
    document.querySelector("#number").addEventListener('click', function(){
        let input = document.querySelector('input');
        if (input.value < 100){
            rowlength = input.value;
            deleteRow();
            createGrid();
            startBox();
            resetBox();
        }
        else{
            alert("Input less than 100");
        }
        
    });
    
    const container = document.querySelector(".container");
    createGrid();
    startBox();
    resetBox();

    function createGrid(){
        for(let i = 0; i < rowlength; i++){
            createRow();
        }
    }
    
    function startBox(){
        let allBoxes = document.querySelectorAll('.box');
        for(let numOfBox = 0; numOfBox < allBoxes.length; numOfBox++){
            allBoxes[numOfBox].addEventListener('mouseleave', function(){
                allBoxes[numOfBox].style.backgroundColor = "cyan";
            });
            allBoxes[numOfBox].addEventListener('click', function(){
                allBoxes[numOfBox].style.backgroundColor = "";
            });
        }
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

    function deleteRow(){
        let allBoxes = document.querySelectorAll('.box');
            for(let numOfBox = 0; numOfBox < allBoxes.length; numOfBox++){
                allBoxes[numOfBox].remove();
            }
        }

    function resetBox(){
        let allBoxes = document.querySelectorAll('.box');
        let resetButton = document.querySelector("#reset");
        for(let numOfBox = 0; numOfBox < allBoxes.length; numOfBox++){
            resetButton.addEventListener('click', function(){
                allBoxes[numOfBox].style.backgroundColor = "";
            });
        }
        }
});