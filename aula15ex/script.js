function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    let fano = document.getElementById("iano")
    var res = document.getElementById('res')
    if (fano.value.length = 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verfique os dados é tente novamente!')
    }else{
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('img')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
              //criança  
              img.src = 'imagens/criança-homem.jpg'
            }else if (idade < 21) {
                //jovem
                img.scr = 'imagens/jovem-homem.jpg'
            }else if (idade < 50) {
                //adulto
                img.src = 'imagens/adulto-homem.jpg'
            }else{
                //idoso
                img.src = 'imagens/idoso-homem.jpg'
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança      
                img.src = 'imagens/criança-mulher.jpg'
            }else if (idade < 21) {
                //jovem
                img.src = 'imagens/jovem-mulher.jpg'
            }else if (idade < 50) {
                 //adulto       
                 img.src = 'imagens/adulto-mulher.jpg'         
            }else{
                //idoso
                img.src = 'imagens/idosa-mulher.jpg'
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    
       res.appendChild(img)
      
    }
      
        
 }