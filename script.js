let nome = prompt("Digite seu Nome:");
let idade = Number(prompt("Digite sua Idade:"));
let possuicadastro = prompt("Possui Cadastro? (S/N)");
let autorização = prompt("Possui autorização especial? (S/N)");
let acompanhado = prompt("Está acompanhado? (S/N)");

if possuicadastro === "N" {
alert("Acesso negado: usuário não cadastrado.")
} else if (possuicadastro === "S" && idade >= 18) {
alert("Acesso liberado")
} 
if (autorização === "N" && idade <= 17) {
if (acompanhado === "S") {
    alert("Permitir entrada com restrição/responsável.")
} else {
    alert("Acesso negado: menor desacompanhado.")
}
} 