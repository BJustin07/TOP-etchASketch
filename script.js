const gridContainer = document.querySelector(".grid");
const rowCount = 16;
const columnCount = 16;
for(let i = 0; i < rowCount; i++){
    const pixelRowContainer = document.createElement("div");
    pixelRowContainer.style.border = "2px solid blue";
    pixelRowContainer.style.display  = "flex";
    pixelRowContainer.style.flexDirection = "column";
    pixelRowContainer.style.gap = "5px";
    gridContainer.append(pixelRowContainer);
    for(let j = 0; j < columnCount; j++){
        const pixelContainer = document.createElement("div");
        pixelContainer.style.border = "2px solid red";
        pixelContainer.style.display  = "flex";
        pixelContainer.style.gap = "5px";
        pixelContainer.addEventListener("")
        pixelRowContainer.append(pixelContainer);
    }
}