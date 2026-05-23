const gridContainer = document.querySelector(".grid");
const clearButton = document.querySelector("#clear");
const setGridButton = document.querySelector("#size");
let pixelContainers = document.querySelectorAll("#pixel");
const body = document.body;
const defaultSize = 16;

function buildGrid(size){
    for(let i = 0; i < size; i++){
    const pixelColumnContainer = document.createElement("div");
    // pixelColumnContainer.style.border = "1px solid black"; for debugging
    pixelColumnContainer.style.flexDirection = "column";
    pixelColumnContainer.style.display = "flex";
    pixelColumnContainer.style.flex = "1";
    pixelColumnContainer.id = "pixelColumnContainer";
    gridContainer.append(pixelColumnContainer);
    for(let j = 0; j < size; j++){
        const pixelContainer = document.createElement("div");
        pixelContainer.style.flex = "1";
        pixelContainer.style.minWidth = "1px";
        pixelContainer.style.minHeight = "1px";
        pixelContainer.id = "pixel";
        pixelContainer.addEventListener("mouseenter", (e)=>{

            e.target.style.backgroundColor = "green";
        })
        pixelColumnContainer.append(pixelContainer);
    }
}
}

function removeChildNodes(parentNode){
    parentNode.replaceChildren();
}

function resetPixelsToWhite(pixels){
    pixels.forEach(pixel =>{
        pixel.style.backgroundColor = "white";
    })
}
buildGrid(defaultSize);

clearButton.addEventListener("click",()=>{
    pixelContainers = document.querySelectorAll("#pixel");
    resetPixelsToWhite(pixelContainers);
})

setGridButton.addEventListener("click",()=>{
    let userChosing = true;
    let gridSize = 0;
    while(userChosing){
        gridSize = parseInt(prompt("Enter a valid size from 0 to 100"));
        if((gridSize >= 0 && gridSize <= 100) || isNaN(gridSize)){
            userChosing = false;
        }
    }
    if(gridSize > 0){
        removeChildNodes(gridContainer);
        buildGrid(gridSize);
    }
})


//todo, dynamically adjusting row/Column count