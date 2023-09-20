const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};

function buscaCortePorId(id) {
      
    const listaDeCortes = barbearia.cortes;

    for (let corte of listaDeCortes) {
    if (corte.id === id) {
             
    return corte;
    }
}
    return "Corte não encontrado";
}

function buscaBarbaPorId(id) { 
    if (barbearia && barbearia.barbas) {

    for (let i = 0; i < barbearia.barbas.length; i++) {

        let barba = barbearia.barbas[i];

        if (barba.id === id) {

            return barba;
        }
    }
     return "Barba não encontrado"
}
}

function verificaStatusBarbearia() {
    let abertoFechado = barbearia.estaAberto
    if (abertoFechado == true){
        return "Estamos abertos"
    }
    return "Estamos fechados"
}

function retornaTodosCortes() {
    let todosOsCortes = barbearia.cortes;
    return todosOsCortes;
}

function retornaTodasBarbas() {
    let todasAsBarbas = barbearia.barbas;
    return todasAsBarbas;
}

function criaPedido(nomeCliente, corteId, barbaId){
       
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);
      
    const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor, 
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor, 
    };
      
    return pedido;
    }

function atualizarServico(lista, id, valor, tipo) {
  for(let i = 0; i < lista.length; i++){
    if(id == lista[i].id){
        lista[i].valor = valor;
        lista[i].tipo = tipo;
    }
  }
  return lista;
}

function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
  
  
  
