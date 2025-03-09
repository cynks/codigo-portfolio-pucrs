// exemplo de Função para implementar busca binária
function buscaBinaria(arr,valor) {
    let inicio = 0;
    let fim = arr.length -1;


while (inicio <= fim) {
    const meio = Math.floor((inicio+fim) /2);

    //se o valor do meio for igual ao valor procurqado, retornar o índice
    if (arr[meio] === valor) {
        return meio;
    }

    //se o valor do meio for menos que o valor procurado, busca na metade da direita
    else if (arr[meio] < valor) {
        inicio = meio +1;
    }

    //se o valor do meio for maior que o elemento procurado, busca na metade esquerda
    else {
        fim = meio -1;
    }
}

return -1; //retorna -1 se o valor não for encontrado
   
}

//aplicação
const arr = [2,3,5,7,9,11,13,15]; //array já ordenado
const valor = 5;

const resultado = buscaBinaria(arr, valor);

if (resultado !== -1) {
    console.log(`Valor encontrado no índice: ${resultado}`); //Saída: Valor encontrado
}

else {
    console.log("Valor não encontrado");
}