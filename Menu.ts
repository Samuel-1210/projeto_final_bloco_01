import { colors } from "./util/Colors";
import readlinesync = require("readline-sync");
import { keyPress, sobre } from "./util/FuncoesRepetidas";

export function main() {
  let opcao;

  while (true) {
    // Menu de opções do sistema

    console.log(
      colors.fg.greenstrong + "╔═════════════════════════════════════════════╗"
    );
    console.log("║               GAMES || JOGOS                ║");
    console.log("╚═════════════════════════════════════════════╝");
    console.log("       1- Listar todos os Jogos");
    console.log("       2- Listar jogo pelo ID");
    console.log("       3- Cadastrar Jogo");
    console.log("       4- Atualizar Jogo");
    console.log("       5- Deletar Jogo");
    console.log("       0- Sair");
    console.log("╔═════════════════════════════════════════════╗");
    console.log("║         Entre com a opção desejada          ║ ");
    console.log("╚═════════════════════════════════════════════╝");
    console.log("", colors.reset);

    console.log(colors.fg.greenstrong, "", colors.reset);
    opcao = readlinesync.questionInt(colors.fg.green + "");

    if (opcao == 0) {
      console.log(colors.fg.greenstrong, "\n LOJA GAMES || JOGOS && DIVERSÃO");
      sobre();
      process.exit(0);
    }
    switch (opcao) {
      case 1:
        console.log(
          colors.fg.greenstrong,
          "\nListar todos os jogos\n",
          colors.reset
        );

        break;

      case 2:
        console.log(
          colors.fg.greenstrong,
          "\nListar jogo pelo ID\n",
          colors.reset
        );
        break;
      case 3:
        console.log(colors.fg.greenstrong, "\nCadastrar Jogo\n", colors.reset);
        break;
      case 4:
        console.log(colors.fg.greenstrong, "\nAtualizar Jogo\n", colors.reset);
        break;
      case 5:
        console.log(colors.fg.greenstrong, "\nDeletar Jogo\n", colors.reset);
        break;
      default:
        console.log(colors.fg.green, "\nOpção Inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
}

main();
