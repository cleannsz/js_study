function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'cria-m.png')
                res.innerHTML = `Tu é uma criança com ${idade} anos.`
                // Criança
            }else if (idade < 21) {
                img.setAttribute('src', 'adolescente-m.png')
                res.innerHTML = `Tu é um adolescente com ${idade} anos.`
                // Jovem
            }else if (idade < 50) {
                img.setAttribute('src', 'homem-m.png')
                res.innerHTML = `Tu é um homem com ${idade} anos.`
                // Adulto
            }else {
                img.setAttribute('src', 'velho-m.png')
                res.innerHTML = `Tu é um VELHO com ${idade} anos.`
                // Idoso
            }

        }else if(fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'cria-f.png')
                res.innerHTML = `Tu é uma criança com ${idade} anos.`
                // Criança
            }else if (idade < 21) {
                img.setAttribute('src', 'adolescente-f.png')
                res.innerHTML = `Tu é um adolescente com ${idade} anos.`
                // Jovem
            }else if (idade < 50) {
                img.setAttribute('src', 'mulher-f.png')
                res.innerHTML = `Tu é uma mulher com ${idade} anos.`
                // Adulto
            }else {
                img.setAttribute('src', 'idosa-f.png')
                res.innerHTML = `Tu é uma VELHA com ${idade} anos.`
                // Idoso
            }
            
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}