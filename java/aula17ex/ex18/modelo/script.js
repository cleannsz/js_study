var noia = []


function clicar() {
    var num = document.getElementById('num')
    var num = Number(num.value)
    var res = document.getElementById('res')

    if(num > 100 || num <= 0){
        alert('erro')
    }else{
        noia.push(Number(num))
        res.innerHTML += `O número adc foi ${num} &#10`
    }
}
function final() {
    if(noia.length == 0){
        alert('erro')
    }else{
        var soma = 0
        var fim = document.getElementById('fim')

        fim.innerHTML += `<p>O total de numeros adicionados é ${(noia.length)} <p/>`
        fim.innerHTML += `<p>O menor numero adicionado é ${Math.min(...noia)} <p/>`
        fim.innerHTML += `<p>O maior numero adicionado é ${Math.max(...noia)} <p/>`

        for(let pos = 0;pos < noia.length; pos++){
            soma += noia[pos]
            media = soma / noia.length
        }

        fim.innerHTML += `<p>Somando os numeros, o total é ${soma}<p/>`

        fim.innerHTML += `<p>A media dos numeros é ${media}<br/>`

    }
}                                       