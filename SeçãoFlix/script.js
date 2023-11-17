// Array de filmes
var filmes = [
    { nome: "Quarto de Guerra", imagem:"https://m.media-amazon.com/images/I/91jr985qa7L._AC_UF1000,1000_QL80_.jpg" },
    { nome: "Deus não está Morto", imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cf/God%27s_Not_Dead.jpg/200px-God%27s_Not_Dead.jpg"},
    { nome: "Desafiando Gigantes", imagem: "https://upload.wikimedia.org/wikipedia/pt/a/aa/Facing_the_Giants.jpg" },
    { nome: "Corajosos", imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/95/49/84/20409028.jpg"},
    { nome: "À Prova de Fogo", imagem: "https://br.web.img2.acsta.net/medias/nmedia/18/97/26/66/20519352.jpg" },
    { nome: "Os Escolhidos", imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/23/08/22/16/44/1620470.jpg" },
    // Adicione mais filmes conforme necessário
];

// Obtém o container de filmes no DOM
var filmesContainer = document.getElementById("filmesContainer");

// Itera sobre a lista de filmes
filmes.forEach(function (filme) {
    // Cria um elemento de div para o filme
    var filmeDiv = document.createElement("div");
    filmeDiv.classList.add("filme-container");

    // Cria um elemento de imagem
    var imagem = document.createElement("img");
    imagem.src = filme.imagem;
    imagem.alt = filme.nome;

    // Cria um elemento de parágrafo para o nome do filme
    var nomeFilme = document.createElement("p");
    nomeFilme.textContent = filme.nome;
    
    // Adiciona a propriedade de estilo para mudar a cor do texto para branco
    nomeFilme.style.color = "white";
    nomeFilme.style.font = 'normal 20px Comic';

    // Adiciona a imagem e o nome do filme à div do filme
    filmeDiv.appendChild(imagem);
    filmeDiv.appendChild(nomeFilme);

    // Adiciona a div do filme ao container de filmes
    filmesContainer.appendChild(filmeDiv);
});