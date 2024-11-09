var idade = 15
console.log(`Voce tem ${idade} anos`)
if(idade < 16){
    console.log('Proibido votar')
}else if(idade >= 16 && idade < 18){
    console.log('Voto opcional')
}else if(idade >= 18){
    console.log('Voto obreigatório')
}
