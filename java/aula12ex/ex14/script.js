function carregar(){

    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `O horario agora é ${hora} horas.`

    if(hora >=6 && hora <= 11){
        foto.src = 'manha.png'
        msg.innerHTML = `O horario no momento é ${hora} horas, Bom dia!`
        document.body.style.background = '#d8ca05'

    }else if(hora >= 12 && hora <= 18){
        foto.src = 'tarde.png'
        msg.innerHTML = `O horario no momento é ${hora} horas, Boa Tarde`
        document.body.style.background = '#d86505'

    }else if(hora > 18 && hora <= 24){
        foto.src = 'noite.png'
        msg.innerHTML = `O horario no momento é ${hora} horas, Boa noite`
        document.body.style.background = '#18232e'

    }else if(hora <= 5){
        foto.src = 'noite.png'
        msg.innerHTML = `O horario no momento é ${hora} horas, Boa Madrugada`
        document.body.style.background = '#010101'
    }
}