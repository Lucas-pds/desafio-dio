let vitorias = 200;
let derrotas = 99;
SaldoVitorias(vitorias, derrotas);

function SaldoVitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    console.log("O Heroi tem saldo de " + saldo + " vitórias.");

    if (saldo < 10) {
        console.log("Está no nível Ferro.");
    } else if (saldo <= 20) {
        console.log("Está no nível Bronze.");
    } else if (saldo <= 50) {
        console.log("Está no nível Prata.");
    } else if (saldo <= 80) {
        console.log("Está no nível Ouro.");
    } else if (saldo <= 90) {
        console.log("Está no nível Diamante.");
    } else if (saldo <= 100) {
        console.log("Está no nível Lendário.");
    } else {
        console.log("Está no nível Imortal.");
    }
}
