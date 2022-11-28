const nome = "Pessoa 1";
let nome2 = "";
let pessoaDefault = {
    nome: "Pessoa 1",
    idade: "18",
    trabalho: "trabaho" 
}

let nomes = ["Pessoa 1", "Pessoa 2","Pessoa 3"]
let pessoas = [
    {
        nome: "Pessoa 1",
        idade: "18",
        trabalho: "trabalho"  
    },
    {
        nome: "Pessoa 2",
        idade: "18",
        trabalho: "trabalho"
    },
    {
        nome: "Pessoa 3",
        idade: "18",
        trabalho: "trabalho"
    }
]

function alterarnome() {
    nome2 = "Pessoa 4"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pessoa 5",
    idade: "18",
    trabalho: "trabalho"
});

imprimirPessoas();
