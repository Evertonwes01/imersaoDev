var numeroSecreto = Math.floor(Math.random() * 1001) + 1;
    //parseInt(Math.random() * 1001)
var tentativaDeChute = 0
var tentativaMaxima = 15

while(chute != numeroSecreto) {
  var chute = prompt(`Digite um numero entre 1 e 1000`)
  tentativaDeChute++
  tentativaMaxima--
  
  if (chute == numeroSecreto && tentativaDeChute < 15) {
    alert(`Você Acertou, Parabens !`)
  } else if (chute < numeroSecreto && tentativaDeChute < 15) {
    alert(`Errou!!! O numero secreto é maior que ${chute}`)
    alert(`Você ja tentou ${tentativaDeChute} vezes!`)
    alert(`Você ainda tem ${tentativaMaxima} chutes!`)
  } else if (chute > numeroSecreto && tentativaDeChute < 15) {
    alert(`Errou!!! O numero secreto é menor que ${chute}`)
    alert(`Você ja tentou ${tentativaDeChute} vezes!`)
    alert(`Você ainda tem ${tentativaMaxima} chutes!`)
  } else {
    alert (`INFELIZMENTE VOCÊ NAO ACERTOU E GASTOU TODAS AS SUAS TENTATIVAS`)
  }
}