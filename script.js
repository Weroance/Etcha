let gridXy = 16;
let pixelAlpha = 0;
let pixelColor = 0;
const sketchBox = document.querySelector("#sketchBox");
const newSize = document.querySelector("#newSize");
const radioBox = document.querySelector("#radioBox")

function randomPrimary()    {
    pixelColor = "hsla(" + Math.floor(Math.random() * 360  ) + ", 100%, 50%, 1)";
}

function createGrid(){
    let colorMode = document.querySelector("#colorMode").checked;
    let shadeMode = document.querySelector("#shadeMode").checked;
    for (let i = 1; i < gridXy; i++ ) {
        let yDiv = document.createElement("div");
        for (let i = 1; i < gridXy; i++) {
            let pixel = document.createElement("div");
            
            pixel.style.backgroundColor = "black";
            pixel.style.opacity = "0";
            pixel.style.minWidth = "15px";
            pixel.style.minHeight = "15px";
            
            yDiv.appendChild(pixel);
            
            
            pixel.addEventListener("mouseover", function(evt){
                pixelAlpha = Number(window.getComputedStyle(evt.target).opacity);
                if (colorMode === true) {
                    evt.target.style.opacity = 1;
                    randomPrimary();
                    evt.target.style.backgroundColor = pixelColor;
                }

                else if (shadeMode === true)    {
                
                if (pixelAlpha < 1)    {
                    pixelAlpha += 0.1;
                    evt.target.style.opacity = (pixelAlpha);
                }
            }
                else    {
                        evt.target.style.opacity = 1;
                }
            })
                        
        }
        yDiv.style.display = "flex";
        
        sketchBox.appendChild(yDiv);
    }
}
                
createGrid();

newSize.addEventListener("click", function(){
    newGridXy = prompt("New grid size?", "16");
    if (newGridXy == null){
        return;
    }
    else if(newGridXy > 100) {
        newGridXy = 100;
    }
    gridXy = newGridXy
    sketchBox.textContent = '';
    createGrid();
});

radioBox.addEventListener("change", function(){
    sketchBox.textContent = '';
    createGrid();
})
        
 