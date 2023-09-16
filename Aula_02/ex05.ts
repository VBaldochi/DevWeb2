//Crie um algoritmo que solicite o nome de um usuário e exiba uma mensagem de boas-vindas personalizada de acordo com o horário do dia (bom dia, boa tarde ou boa noite).

namespace ex05 {
    let hora: number;
    let nome: string;

    nome = 'Eduardo';
    hora = 19;

    if (hora >= 5 && hora < 12) {
        console.log (`Bom dia! Sr(a) ${nome}.`)
      } else if (hora >= 12 && hora < 18) {
        console.log (`Boa Tarde! Sr(a) ${nome}.`)
      } else {
        console.log (`Boa Noite! Sr(a) ${nome}.`)
      }
}