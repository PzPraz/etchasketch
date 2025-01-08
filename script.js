const body = document.querySelector('body')

const main = document.createElement('div')
main.classList.add('main')


const controlSection = document.createElement('div')
controlSection.classList.add('controlSection')

const getSize = document.createElement('input')
getSize.type = 'text'

const clearBtn = document.createElement('button')
clearBtn.classList.add('clearBtn')

const eraserBtn = document.createElement('button')
eraserBtn.classList.add('eraserBtn')

const colorBtn = document.createElement('button')
colorBtn.classList.add('colorBtn')

const clickBtn = document.createElement('button')
clickBtn.classList.add('clickBtn')

controlSection.appendChild(getSize)
controlSection.appendChild(clearBtn)
controlSection.appendChild(eraserBtn)
controlSection.appendChild(colorBtn)
controlSection.appendChild(clickBtn)





const grids = document.createElement('div')
grids.classList.add('grids')

for(let i = 0; i < 256; i ++){
    let grid = document.createElement('div')
    grid.classList.add('grid')
    grids.appendChild(grid)
}

main.appendChild(controlSection)
main.appendChild(grids)

body.appendChild(main)