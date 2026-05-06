function salvarCarro(event) {
    //impedir de recarregar a página
    event.preventDefault();

    let titulo = document.getElementById('title').value;
    let preco = document.getElementById('preco').value;
    let descricao = document.getElementById('descricao').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('Modelo').value;
    let kilometragem = document.getElementById('kilometragem').value;
    let data_compra = document.getElementById('data_compra').value;

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

        let carro = {
        id: Date.now(),
        titulo,
        preco,
        descricao,
        marca,
        modelo, 
        kilometragem,
        data_compra,
        cambio
    };

    let carros = JSON.parse(localStorage.getItem("carros")) || [];
    carros.push(carro);
    localStorage.setItem("carros", JSON.stringify(carros));

    adicionarNaTela(carro);

    document.querySelector("form").reset();
}

function adicionarNaTela(carro) {
    let lista = document.getElementById('listarCarros');
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <img src = 'https://picsum.photos/250/150?random= ${Math.random()}'>
    <h3>${carro.titulo}</h3>
    <p><strong>Preço:</strong> R$ ${carro.preco}</p>
    <p><strong>Marca:</strong> ${carro.marca}</p>
    <p><strong>Modelo:</strong> ${carro.Modelo}</p>
    <p><strong>Câmbio:</strong> ${carro.cambio}</p>
    <button onclick="excluirCarro(${carro.id}, this)">Excluir</button>
    `;

    lista.appendChild(card);
}

window.onload = function () {
    let carros = JSON.parse(localStorage.getItem("carros")) || [];

    carros.forEach(carro => {
        adicionarNaTela(carro);
    });
}

function excluirCarro(id, botao) {
     let carros = JSON.parse(localStorage.getItem("carros")) || []; 
     carros = carros.filter(carro => Number(carro.id) !==Number(id));
     localStorage.setItem("carros", JSON.stringify(carros));

     let card = botao.parentElement;
     card.remove();
}
         
              
    
 
