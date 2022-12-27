function contar() {
    let inicio = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    var num1 = Number(inicio.value)
    var num2 = Number(fim.value)
    var num3 = Number(passo.value) 
    if (num1 == 0 || num2 == 0 || num3 == 0) {
        alert('[ERRO] Faltam dados')
       
    }else {
        res.innerHTML = 'Contando: <br>'
    } if (num3 <= 0 ) {
        alert('passo invalido! Considerando PASSO 1 ')
        num3 = 1
    }
  if (num1 < num2) {
    for(let c = num1; c <= num2;c += num3){
        res.innerHTML += `${c}` 
    }
  } else{
    for(let c = num1; c >= num2; c -= num3){
        res.innerHTML += `${c}`
    }
    
  }
    
}
     

