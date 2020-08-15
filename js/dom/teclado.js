const d = document;
let x =0, y=0;

export function shorcuts(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);

    if(e.key === 'a' && e.altKey){
        alert('has lanzado una alerta con el telado');
    }

    if(e.key === 'c' && e.altKey){
        confirm('has lanzado un confirm con el telado');
    }

    if(e.key === 'p' && e.altKey){
        prompt('has lanzado un prompt con el teclado')
    }
}
    export function moveBall(e, ball, stage){

        const $ball = d.querySelector(ball),
              $stage = d.querySelector(stage),
              limitsBall = $ball.getBoundingClientRect(),
              limitsStage = $stage.getBoundingClientRect();

       

        switch(e.keyCode){
            // izquierda
            case 37:
                e.preventDefault();
                if(limitsBall.left > limitsStage.left) x--;
                break;
            // arriba   
            case 38:
                e.preventDefault();
                if(limitsBall.top > limitsStage.top) y--;
                break;
            // derecha
            case 39:
                e.preventDefault();
                if(limitsBall.right < limitsStage.right) x++;
                break;
            // abajo
            case 40:
                e.preventDefault();
                if(limitsBall.bottom < limitsStage.bottom) y++;
                break;
            default: 
                break;           
        }  
        
        $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
    }
