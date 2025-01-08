const body = document.querySelector('body')

const main = document.createElement('div')
main.classList.add('main')


const controlSection = document.createElement('div')
controlSection.classList.add('controlSection')


const getSize = document.createElement('input')
getSize.id = 'inputSize'
getSize.type = 'text'
getSize.placeholder = 'Enter desired size (1-100)'

getSize.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        updateGrid()
    }
    }
)

const clearBtn = document.createElement('button')
clearBtn.classList.add('clearBtn')
clearBtn.textContent = 'Clear'
clearBtn.onclick = clear

const eraserBtn = document.createElement('button')
eraserBtn.classList.add('eraserBtn')
eraserBtn.textContent = 'Eraser'
eraserBtn.onclick = eraserMode

const colorBtn = document.createElement('button')
colorBtn.classList.add('colorBtn')
colorBtn.textContent = 'Pick Color'
colorBtn.onclick = askColor

const clickBtn = document.createElement('button')
clickBtn.classList.add('clickBtn')
clickBtn.textContent = 'Toggle Click Mode'
clickBtn.onclick = toggleClick

const opaqueBtn = document.createElement('button')
opaqueBtn.classList.add('opaqueBtn')
opaqueBtn.textContent = 'Darker Mode'
opaqueBtn.onclick = opaqueMode

const randomBtn = document.createElement('button')
randomBtn.classList.add('randomBtn')
randomBtn.textContent = 'Random Color'
randomBtn.onclick = randomize

controlSection.appendChild(getSize)
controlSection.appendChild(clearBtn)
controlSection.appendChild(colorBtn)
controlSection.appendChild(eraserBtn)
controlSection.appendChild(clickBtn)
controlSection.appendChild(opaqueBtn)
controlSection.appendChild(randomBtn)



let random = false
let colorPicked = 'black'



const grids = document.createElement('div')
grids.classList.add('grids')

for(let i = 0; i < 256; i ++){
    let grid = document.createElement('div')
    grid.classList.add('grid')
    grid.style.width = '43.75px'
    grid.style.height = '43.75px'
    grids.appendChild(grid)
    
}

main.appendChild(controlSection)
main.appendChild(grids)

body.appendChild(main)

let hoverMode = true
let clickMode = false

function clickers(){

    const grids = document.querySelectorAll('.grid')
    grids.forEach(grid => {
        listener = (e) => {

            if(random){
                colorPicked = getRandomColor()
            }

            grid.style.backgroundColor = colorPicked
        }

        grid.listener = listener

        grid.addEventListener('click', listener)
    
    })

    hoverMode = false
    clickMode = true
}

let opaque = false

function hovers(){
    const grids = document.querySelectorAll('.grid')
    grids.forEach(grid => {
        listener = (e) => {
            

            if(random){
                colorPicked = getRandomColor()
            }

            
            grid.style.backgroundColor = colorPicked
            if(opaque){
                console.log(('anjay'));
              
         
                if (!grid.style.opacity){
                    grid.style.opacity = 0.1
                } else {
                    let currentOpacity = parseFloat(grid.style.opacity);
                    if (currentOpacity < 1) { // Ensure it doesn't exceed 1
                        grid.style.opacity = (currentOpacity + 0.1).toFixed(1)
                    };
                }
            }
        }

        grid.listener = listener

        grid.addEventListener('mouseover', listener)
    
    })

    hoverMode = true
    clickMode = false
}

hovers()

//function for toggling click or hover
function toggleClick(){
    const grids = document.querySelectorAll('.grid')

    if (hoverMode){
        grids.forEach(grid => {
            grid.removeEventListener('mouseover', grid.listener)
        })
        
        clickers()

    } else if(clickMode) {
        grids.forEach(grid => {
            grid.removeEventListener('click', grid.listener)
        })
        
        hovers()

    }

}

//clearing the grids
function clear(){
    const grids = document.querySelectorAll('.grid')
    grids.forEach(grid => {
        grid.style.backgroundColor = 'white'
    })
}

function eraserMode(){
    colorPicked = 'white'
}

function askColor(){
    const color = prompt("Enter a color (e.g., 'red', '#ff0000', 'rgb(255, 0, 0)'):");
    colorPicked = color
}



function opaqueMode(){
    opaque = true
    hovers()
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomize(){
    if(random){
        colorPicked = 'black'
        random = false
    } else{
        random = true
    }
}

function updateGrid(){

    let size = document.querySelector('#inputSize').value


    let grids = document.querySelector('.grids')
    grids.innerHTML = ''


    gridSideSize = 700 / size

    totalGrid = size*size

    for(let i = 0; i < totalGrid; i++){
        let grid = document.createElement('div')
        grid.classList.add('grid')
        grid.style.width = gridSideSize + 'px'
        grid.style.height = gridSideSize + 'px'
        grids.appendChild(grid)
    }

    if (hoverMode){
        hovers()
    } else{
        clickers()
    }
 }

