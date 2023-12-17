let nomeHeroi = "Igor Do javinha";
let quantidadeExp = 15;
let nivel;

if(quantidadeExp < 1000){
    nivel ="Ferro";
}
else if (quantidadeExp > 1000 && quantidadeExp < 2000){
    nivel ="Bronze";
}else if (quantidadeExp > 2000 && quantidadeExp < 5000){
    nivel ="Prata";
}else if (quantidadeExp > 5000 && quantidadeExp < 7000){
    nivel ="Ouro";
}else if (quantidadeExp > 7000 && quantidadeExp < 8000){
    nivel ="Platina";
}  else if (quantidadeExp > 8000 && quantidadeExp < 9000){
    nivel ="Ascendente";
}else if (quantidadeExp > 9000 && quantidadeExp < 10000){
    nivel ="Imortal";
}else {
    nivel ="Radiante";
}
                         
console.log("O herói " + nomeHeroi + " está no nível de " + nivel);