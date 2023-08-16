//Oii meu nome é Alexandra, nunca havia programado com JavaScript antes, usei somente python, estou cursando ADS e aprendendo Php e Sql, comecei a estudar JavaScript no youtube esses dias por interesse, tentei realizar a solução desse desafio e embora não tenha conseguido realizar 100% como o esperado me encontro feliz por participar disso e com certeza estudarei mais para aprimorar as habilidades nessa linguagem :)


class CaixaDaLanchonete {
        constructor() {
          itens = [
            { nome: 'café', preco: 3.00 },
            { nome: 'chantilly', preco: 1.50 },
            { nome: 'suco', preco: 6.20 },
            { nome: 'sanduíche', preco: 6.50 },
            { nome: 'queijo', preco: 2.00 },
            { nome: 'salgado', preco: 7.25 },
            { nome: 'combo1', preco: 9.50 },
            { nome: 'combo2', preco: 7.50 }
        ]
        }
}
function calculardesconto(preco0) {
    const desconto = 0.05; 
    const precodesconto = preco0 - (preco0 * desconto);
    return precodesconto;
}
function adicionarvalor(valor) {
    const porcentagem = 0.03; 
    const valormais = valor + (valor * porcentagem);
    return valormais;
}
//depois daqui tive dificuldade :(
function calcularValorDaCompra(metodoDePagamento){
    if (metodoDePagamento = dinheiro)
        calculardesconto = precofinal
    if (metodoDePagamento = credito)
        adicionarvalor = precofinal
        return "";
}
export { CaixaDaLanchonete };




  
  
