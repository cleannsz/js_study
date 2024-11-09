function clique(){

    var inicio = document.getElementById('inicio')
    var inicio = Number(inicio.value)
    var fim = document.getElementById('fim')
    var fim = Number(fim.value)
    var passo = document.getElementById('passo')
    var passo = Number(passo.value)
    var res = document.getElementById('res')

    if(inicio == 0 || fim == 0 || passo == 0){
        alert('erro')

    }else {
      for(inicio; inicio <= fim; inicio += passo){
        res.innerHTML += `- ${inicio} `
        }
        
    }for(inicio; inicio >= fim; inicio -= passo){
        res.innerHTML += `- ${inicio} `
    }
}