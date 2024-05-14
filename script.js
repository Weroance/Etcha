let gridXy = 16;
let pixelAlpha = 0;
const pixelColor = 0;
const sketchBox = document.querySelector("#sketchBox");
const newSketch = document.querySelector("#newSketch");

function createGrid(Color, Alpha){
    for (let i = 1; i < gridXy; i++ ) {
        let yDiv = document.createElement("div");
        for (let i = 1; i < gridXy; i++) {
            let pixel = document.createElement("div");
            pixel.style.backgroundColor = "grey"
            pixel.style.minWidth = "10px";
            pixel.style.minHeight = "10px";
            //border for testing VVV
            //pixel.style.border = "1px solid red";
            yDiv.appendChild(pixel)
            pixel.addEventListener("mouseover", function(evt){
                evt.target.style.backgroundColor = Color
            })
        }
        yDiv.style.display = "flex";
        
        sketchBox.appendChild(yDiv);
    }
}
createGrid("black",);

newSketch.addEventListener("click", function(){
    gridXy = prompt("New grid size?", "16")
    if (gridXy === null)  {
        return;
    }
    if (gridXy > 100) {
        gridXy = 100
    }
sketchBox.textContent = ''
createGrid("black")
})


// EXTRA credit: listen for button
//                  hover causes random color or "pixel" has random color assignment
// EXTRA credit II listen for button use %10 shading on each hover event   