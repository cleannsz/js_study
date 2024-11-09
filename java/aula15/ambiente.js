let num = [5, 2, 8, 9, 3]
num.sort()
var pos = num.indexOf(2)

/*
console.log(`o vetor tem ${num.length} de comprimento`)
console.log(`nosso vetor eh ${num}`)
console.log(`o primeiro numero é ${num[0]}`)*/

if(pos == -1){
    console.log('samerda ta errada')
}else {
console.log(`o numero 2 esta na casa ${pos}`)
}