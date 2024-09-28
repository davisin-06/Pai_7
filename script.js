
let lista_lugares_objetos = [
    {
        nome: "Alicate",
        lugar: "segundo armario coluna 2 linha 3"
    },
    {
        nome: "Pinça",
        lugar: "terceiro armario coluna 10 linha 1"
    }
]


function Procurar() {
    var input = document.getElementById("input").value.trim();
    const caixa = document.getElementById("conteiner");
    var objetoEncontrado = null;
    var lista_criada = document.getElementById("lista_objeto");
    if (lista_criada) caixa.removeChild(lista_criada);
    var lista_ul = document.createElement('ul')
    lista_ul.id = "lista_objeto";
    caixa.appendChild(lista_ul)
    debugger
    for (let posicao = 0; posicao < lista_lugares_objetos.length; posicao = posicao + 1) {
        if (input == lista_lugares_objetos[posicao].nome) {
            objetoEncontrado = lista_lugares_objetos[posicao]
        break
        }
    }

    if (objetoEncontrado != null) {

        const Informacao = ` 
         <p>O<small>(a)</small> ${objetoEncontrado.nome} está no ${objetoEncontrado.lugar}.</p>
         `
        lista_ul.innerHTML = Informacao;
    }
    else {
        lista_ul.innerText = "O objeto não foi encontrado!"
    }

}