const gridXy = 16;
const pixelColor = "rgba(0, 0, 0, 1)";
const sketchBox = document.querySelector("#sketchBox");


//event listener to trigger the function to ...

// create 16 yDivs and create inside of them append 16 divs "pixels" 
    // and append to sketchBox 
function createGrid(){
    for (let i = 1; i < gridXy; i++ ) {
        let yDiv = document.createElement("div")
        for (let i = 1; i < gridXy; i++) {
            let xDiv = document.createElement("div")
            xDiv.style.backgroundColor = pixelColor
            xDiv.style.minWidth = "50px"
            xDiv.style.minHeight = "50px"
            yDiv.appendChild(xDiv)
        }
        yDiv.style.display = "flex"
        sketchBox.appendChild(yDiv)
    }
}

createGrid()
    //  listen for hover over all divs (for each do?)  ????
//      upon event change "pixel" divs black

//  listen for button to create new grid
//      event: prompt for single grid dimension default to 16

// EXTRA credit: listen for button
//                  hover causes random color or "pixel" has random color assignment
// EXTRA credit II listen for button use %10 shading on each hover event   