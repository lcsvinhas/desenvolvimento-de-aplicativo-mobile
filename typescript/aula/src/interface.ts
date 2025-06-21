interface Aluno {
    nome: string
    idade: number
    time?: string
    endereco: string
}

const aluno: Aluno = {
    nome: "Leandro",
    idade: 30,
    time: "Flamengo",
    endereco: "Rua Bingen"
}
console.log(aluno);

function exibirAluno({ nome, idade, endereco }: Aluno): string {
    return `${nome} - ${idade} - ${endereco}`
}
console.log(exibirAluno({ nome: "Anna", idade: 27, endereco: "Rua do Imperador" }));

const exibirAlunoArrow = ({ nome, idade, endereco }: Aluno): string => `${nome} - ${idade} - ${endereco}`
console.log(exibirAlunoArrow({ nome: "Anna", idade: 27, endereco: "Rua do Imperador" }));