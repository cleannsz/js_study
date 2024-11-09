function clicar(){

    var numero = document.getElementById('numero')
    var numero = Number(numero.value)
    var n1 = 1
    var res = document.getElementById('res')

    if(numero == 0){
        alert('erro')
    }else{
    while(n1 < 11){
        var n2 = numero * n1
        res.innerHTML += `${numero} x ${n1} = ${n2}&#10`
        n1++}
    }
}

/*
function clicar(){
    var numero = document.getElementById('numero')
    var numero = Number(numero.value)
    var res = document.getElementById('res')
    var n1 = numero * 1
    var n2 = numero * 2
    var n3 = numero * 3
    var n4 = numero * 4
    var n5 = numero * 5
    var n6 = numero * 6
    var n7 = numero * 7
    var n8 = numero * 8
    var n9 = numero * 9
    var n10 = numero * 10

    res.innerHTML = 
    `${numero} x 1 = ${n1} <br/>
    ${numero} x 2 = ${n2} <br/>
    ${numero} x 3 = ${n3} <br/>
    ${numero} x 4 = ${n4} <br/>
    ${numero} x 5 = ${n5} <br/>
    ${numero} x 6 = ${n6} <br/>
    ${numero} x 7 = ${n7} <br/>
    ${numero} x 8 = ${n8} <br/>
    ${numero} x 9 = ${n9} <br/>
    ${numero} x 10 = ${n10}`

}
*/