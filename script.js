let gridXy = 16;
let pixelAlpha = "0";
const pixelColor = "rgba(0, 0, 0, " + pixelAlpha + ")";
const sketchBox = document.querySelector("#sketchBox");
const newSketch = document.querySelector("#newSketch")


//event listener to trigger the function to ...

// create 16 yDivs and create inside of them append 16 divs "pixels" 
    // and append to sketchBox 
function createGrid(){
    for (let i = 1; i < gridXy; i++ ) {
        let yDiv = document.createElement("div");
        for (let i = 1; i < gridXy; i++) {
            let xDiv = document.createElement("div");
            xDiv.style.backgroundColor = pixelColor
            xDiv.style.minWidth = "10px";
            xDiv.style.minHeight = "10px";
            //border for testing VVV
            //xDiv.style.border = "1px solid red";
            yDiv.appendChild(xDiv)
            xDiv.addEventListener("mouseover", function(evt){
                evt.target.style.backgroundColor = "rgba( 0, 0, 0, 1)"
            })
        }
        yDiv.style.display = "flex";
        
        sketchBox.appendChild(yDiv);
    }
}
createGrid();

newSketch.addEventListener("click", function(){
gridXy = prompt("New grid size?", "16")
if (gridXy > 100) {
    gridXy = 100
}
sketchBox.textContent = ''
createGrid()
})


// EXTRA credit: listen for button
//                  hover causes random color or "pixel" has random color assignment
// EXTRA credit II listen for button use %10 shading on each hover event   