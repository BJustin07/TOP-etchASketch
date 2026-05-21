const gridContainer = document.querySelector(".grid");
const clearButton = document.querySelector("#clear");
const setGridButton = document.querySelector("#size");
const body = document.body;
const rowCount = 16;
const columnCount = 16;
for(let i = 0; i < rowCount; i++){
    const pixelColumnContainer = document.createElement("div");
    // pixelColumnContainer.style.border = "1px solid black"; for debugging
    pixelColumnContainer.style.flexDirection = "column";
    pixelColumnContainer.style.display = "flex";
    pixelColumnContainer.style.flex = "1";
    pixelColumnContainer.id = "pixelColumnContainer";
    gridContainer.append(pixelColumnContainer);
    for(let j = 0; j < columnCount; j++){
        const pixelContainer = document.createElement("div");
            // pixelContainer.style.border = "1px solid red";  for debugging
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
            // pixelContainer.style.border = "1px solid red";  for debugging
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

const pixelContainers = document.querySelectorAll("#pixel");;
const columnContainers = document.querySelectorAll("#pixelColumnContainer");
clearButton.addEventListener("click",()=>{
    pixelContainers.forEach((element) =>{
        element.style.backgroundColor = "white";
    })
})
setGridButton.addEventListener("click",()=>{
    let userChosing = true;
    let gridSize = 0;
    while(userChosing){
        let gridSize = parseInt(prompt("Enter a valid size from 0 to 100"));
        if(gridSize > 0 || gridSize < 100 || isNaN(gridSize)){
            userChosing = false;
        }
    }
    //mali pa ito hindi pa dynamic yung sizing based sa prompt hindi ma delete
    //yung pixelContainers
    if(gridSize > 0){
        console.log("yep")
        gridContainer.remove(columnContainers);
        // buildGrid(gridSize);
    }
    // gridContainer.removeChild(columnContainers);
    //enter prompt after clicking this button logic.
    
})


//todo, dynamically adjusting row/Column count