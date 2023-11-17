var velocidadeLuz = 300.000
var anosDeDistancia = Number(window.prompt('Digite quantos anos de distancia'))
var segundosAno = 31536.00;

anosDeDistancia = anosDeDistancia * segundosAno
var metros = velocidadeLuz * anosDeDistancia;
alert(`A distancia é de ${metros} metros`);
