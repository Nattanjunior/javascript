let n = document.getElementById('n1')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    } else{
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    }else{
        return false
    }
}

function adicionar() {
    if (isNumero(n.value) && !inLista(n.value, valores)) {
        alert('Tudo ok!')
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
}