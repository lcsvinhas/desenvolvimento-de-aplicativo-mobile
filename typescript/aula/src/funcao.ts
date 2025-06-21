function login(username: string): string {
    let message = `Bem-vindo, ${username}`
    return message
}
console.log(login("Fulano"))

const loginArrow = (username: string): string => `Bem-vindo, ${username}`
console.log(loginArrow("Fulano"))

function cadastro(id: number, nome: string, situacao = true, email?: string) {
    return `${id} - ${nome}, ${situacao} ${email}`
}
console.log(cadastro(1, "Thayná"))

const cadastroArrow = (id: number, nome: string, situacao = true, email?: string) => `${id} - ${nome}, ${situacao} ${email}`
console.log(cadastro(1, "Thayná"))
