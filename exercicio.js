let chute = Number(prompt('Qual o numero?'));
let i = 0;
let vidas = 10;
const aleatorio = function(min, max){
    min= 0;
    max = 50;
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

let numaletorio = aleatorio();


while(chute != numaletorio && i<vidas){
    if(chute > numaletorio){
        chances = vidas - 1 ;
        chute = Number (prompt('Errou, o número é menor, você ainda possui ${vidas} vidas, tenta novamente'));
    }
    else if (chute < numaletorio){
        chute = Number (prompt('Errou, o número é maior, você possui  ${vidas} tente novamente.'));
    }
    vidas --;
}

if( vidas == 0 ) {
    alert('Está sem vidas');
}
if(chute == numaletorio){
    alert('Parabens, acertou!');
}
