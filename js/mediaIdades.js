function pulaLinha() {
    document.write("<br>")
}

function mostra(frase) {
    document.write(frase)
    pulaLinha()
}

var totalFamiliares = parseInt(prompt("Quantidade de familiares?"))
var numero = 1
var totalIdade = 0

while ( numero <= totalFamiliares) {
    var idade = parseInt(prompt("Informe a idade do familiar?"))
    totalIdade = totalIdade + idade
    numero++
}

var mediaDasIdade = totalIdade / totalFamiliares;
mostra("A média das idades dos familiares é: " + mediaDasIdade)
mostra("Fim!")