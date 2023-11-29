const grid = document.querySelector('.grid');
let startdrawing = false; 
let color = 'black';
let size = 16;

function createGrid(size) { 
    for (let i = 0; i < size; i++ ) { 
        const column = document.createElement('div');
        column.classList.add('col_style'); 
        grid.appendChild(column);
        for (let j = 0; j < size; j++) { 
            const square = document.createElement('button'); 
            square.classList.add('square_style'); 
            column.appendChild(square);
        }
    }

}

function updateSize(newSize) { 
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    
    createGrid(newSize);
    draw();
}

function getSize() { 
    const gridsize = document.getElementById('myRange');
    const displaysize = document.querySelector('.value'); 
    gridsize.oninput = function() { 
        displaysize.innerHTML = this.value; 
        updateSize(this.value);
    } 
}

function toggleDrawing() { 
    startdrawing = !startdrawing; 
}

function setcolor(e) { 
    if(startdrawing) { 
        if (color === 'rainbow') { 
            e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        }
        else { 
            e.target.style.backgroundColor = color;
        }
    }
}

function draw() {  
    const erase = document.querySelector("#erase"); 
    const black = document.querySelector("#black"); 
    const rainbow = document.querySelector("#rainbow");
    const squares = document.querySelectorAll('.square_style'); 
    
    black.addEventListener('click', function(e) { 
        color = 'black';
    })
    rainbow.addEventListener('click', function(e) { 
        color = 'rainbow'; 
    })
    erase.addEventListener('click', function(e) { 
        color = 'white';
    })

    squares.forEach(square => { 
        square.addEventListener('mouseover', setcolor); 
        square.addEventListener('click', toggleDrawing);
    });
}

createGrid(size)
draw();
getSize();