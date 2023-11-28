const grid = document.querySelector('.grid');

function CreateGrid() { 
    /*
    for (let j = 0; j < 2; j++) { 
        for (let i = 0; i < 16; i++) { 
            const row_square = document.createElement('button'); 
            row_square.classList.add('square_style'); 

            const column_square = document.createElement('button'); 
            column_square.classList.add('square_style'); 

            row.appendChild(row_square);
            column.appendChild(column_square); 
        }
    }
    */
    for (let i = 0; i < 16; i++ ) { 
        const column = document.createElement('div');
        column.classList.add('col_style'); 
        grid.appendChild(column);
        for (let j = 0; j < 16; j++) { 
            const square = document.createElement('button'); 
            square.classList.add('square_style'); 
            column.appendChild(square);
        }
    }

}

CreateGrid();