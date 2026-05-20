const gridContainer = document.querySelector(".grid");
const rowCount = 16;
const columnCount = 16;
for(let i = 0; i < rowCount; i++){
    const pixelColumnContainer = document.createElement("div");
    // pixelColumnContainer.style.border = "1px solid black"; for debugging
    pixelColumnContainer.style.flexDirection = "column";
    pixelColumnContainer.style.display = "flex";
    pixelColumnContainer.style.flex = "1";
    gridContainer.append(pixelColumnContainer);
    for(let j = 0; j < columnCount; j++){
        const pixelContainer = document.createElement("div");
            // pixelContainer.style.border = "1px solid red";  for debugging
        pixelContainer.style.flex = "1";
        pixelContainer.style.minWidth = "1px";
        pixelContainer.style.minHeight = "1px";
        pixelContainer.addEventListener("mouseenter", (e)=>{
            e.target.style.backgroundColor = "green";
        })
        pixelColumnContainer.append(pixelContainer);
    }
}

//todo, add buttons to reset canvas and to resize "painting" width
//by dynamically adjusting row/Column count