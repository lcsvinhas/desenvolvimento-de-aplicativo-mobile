"use strict";
function login(username) {
    let message = `Bem-vindo, ${username}`;
    return message;
}
console.log(login("Fulano"));
const loginArrow = (username) => `Bem-vindo, ${username}`;
console.log(loginArrow("Fulano"));
function cadastro(id, nome, situacao = true, email) {
    return `${id} - ${nome}, ${situacao} ${email}`;
}
console.log(cadastro(1, "Thayná"));
const cadastroArrow = (id, nome, situacao = true, email) => `${id} - ${nome}, ${situacao} ${email}`;
console.log(cadastro(1, "Thayná"));
