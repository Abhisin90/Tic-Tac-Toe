const cells = document.querySelectorAll('.grid-item')
const h1 = document.querySelectorAll('h1')[1]
const restart = document.querySelector('button')

let num = 1

const check = (cell,value) => {
   
    if(cell==0){
        if(cells[cell+1].innerHTML===value && cells[cell+2].innerHTML===value){
            return true;
        }
        if(cells[cell+3].innerHTML==value && cells[cell+6].innerHTML==value){
            return true;
        }
        if(cells[cell+4].innerHTML==value && cells[cell+8].innerHTML==value){
            return true;
        }
    }
    if(cell==1){
        if(cells[cell-1].innerHTML==value && cells[cell+1].innerHTML==value){
            return true;
        }
        if(cells[cell+3].innerHTML==value && cells[cell+6].innerHTML==value){
            return true;
        }
    }
    if(cell==2){
        if(cells[cell-1].innerHTML==value && cells[cell-2].innerHTML==value){
            return true;
        }
        if(cells[cell+3].innerHTML==value && cells[cell+6].innerHTML==value){
            return true;
        }
        if(cells[cell+2].innerHTML==value && cells[cell+4].innerHTML==value){
            return true;
        }
    }
    if(cell==3){
        if(cells[cell+1].innerHTML==value && cells[cell+2].innerHTML==value){
            return true;
        }
        if(cells[cell-3].innerHTML==value && cells[cell+3].innerHTML==value){
            return true;
        }
    }
    if(cell==4){
        if(cells[cell+1].innerHTML==value && cells[cell-1].innerHTML==value){
            return true;
        }
        if(cells[cell-3].innerHTML==value && cells[cell+3].innerHTML==value){
            return true;
        }
        if(cells[cell-4].innerHTML==value && cells[cell+4].innerHTML==value){
            return true;
        }
    }
    if(cell==5){
        if(cells[cell-1].innerHTML==value && cells[cell-2].innerHTML==value){
            return true;
        }
        if(cells[cell+3].innerHTML==value && cells[cell-3].innerHTML==value){
            return true;
        }
    }
    if(cell==6){
        if(cells[cell+1].innerHTML==value && cells[cell+2].innerHTML==value){
            return true;
        }
        if(cells[cell-3].innerHTML==value && cells[cell-6].innerHTML==value){
            return true;
        }
        if(cells[cell-4].innerHTML==value && cells[cell-2].innerHTML==value){
            return true;
        }
    }
    if(cell==7){
        if(cells[cell+1].innerHTML==value && cells[cell-1].innerHTML==value){
            return true;
        }
        if(cells[cell-3].innerHTML==value && cells[cell-6].innerHTML==value){
            return true;
        }
    }
    if(cell==8){
        if(cells[cell-1].innerHTML==value && cells[cell-2].innerHTML==value){
            return true;
        }
        if(cells[cell-6].innerHTML==value && cells[cell-3].innerHTML==value){
            return true;
        }
        if(cells[cell-4].innerHTML==value && cells[cell-8].innerHTML==value){
            return true;
        }
    }
}

let fg=0

for (let cell of cells){
    cell.addEventListener('click',(event) => {
        if(num<9) 
        {
            if(!fg) 
            {
                if(num%2) cell.innerHTML = 'X'
                else cell.innerHTML = 'O'
                if(check(parseInt(cell.classList[1]),cell.innerHTML))
                {
                    fg=1
                    h1.innerHTML = `${cell.innerHTML} won the game!!!`
                }
            }
        }
        else if(num==9) 
        {
            if(!fg) {
                cell.innerHTML = 'X'
                
                if(check(parseInt(cell.classList[1]),cell.innerHTML))
                {
                    fg=1
                    h1.innerHTML = `${cell.innerHTML} won the game!!!`
                }      
                if(h1.innerHTML==='') h1.innerHTML = "Game Tied"
            } 
        }
        num++
    })
}

restart.addEventListener('click',() => {
    window.location.reload();
})

