function carregar() {
    var msg =  document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#c3c2c0'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#e3c69a'
    } else{
        //boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#30444b'
    }
}