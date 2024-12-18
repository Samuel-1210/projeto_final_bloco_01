import { colors } from "./src/util/Colors";
import readlinesync = require("readline-sync");
import { keyPress, sobre } from "./src/util/FuncoesRepetidas";
import { JogoFisico } from "./src/model/JogoFisico";
import { JogoDigital } from "./src/model/JogoDigital";
import { JogoController } from "./src/Controller.ts/JogoController";
import { NODATA } from "dns";

export function main() {
  let opcao,
    id_jogo,
    nome,
    genero,
    preco,
    desenvolvedor,
    multiplayer,
    forma,
    peso,
    midia,
    tamanho,
    plataforma;

  const plataformas = ["XBOX", "PlayStation", "PC"];
  const online = ["Nao", "Sim"];
  const generos = ["RPG", "Corrida", "Esporte", "Acao", "Aventura"];
  const midias = ["DVD", "CD", "BluRay"];
  const formas = ["Fisica", "Digital"];

  const jogos = new JogoController();
  // Jogo Digital 1
  jogos.cadastrarJogo(
    new JogoDigital(
      jogos.gerarID(),
      "Cyberpunk 2077",
      1,
      249.99,
      "CD Projekt",
      2,
      70,
      3 // PC
    )
  );

  // Jogo Digital 2
  jogos.cadastrarJogo(
    new JogoDigital(
      jogos.gerarID(),
      "Gran Turismo 7",
      2,
      349.99,
      "Polyphony Digital",
      1,
      100,
      2 // PlayStation
    )
  );
  // Jogo Físico 1
  jogos.cadastrarJogo(
    new JogoFisico(
      jogos.gerarID(),
      "Spider-Man: Miles Morales",
      4,
      199.99,
      "Insomniac Games",
      2, // Multiplayer: Não
      400, // Peso em KG
      1 // DVD
    )
  );

  // Jogo Físico 1
  jogos.cadastrarJogo(
    new JogoFisico(
      jogos.gerarID(),
      "The Last of Us Part II",
      5,
      229.99,
      "Naughty Dog",
      2, // Multiplayer: Sim
      500, // Peso em KG
      3 // BluRay
    )
  );

  while (true) {
    // Menu de opções do sistema

    console.log(
      colors.fg.greenstrong +
        "\n\n╔═════════════════════════════════════════════╗"
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
        jogos.listarTodosJogos();
        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.greenstrong,
          "\nListar jogo pelo ID\n",
          colors.reset
        );

        console.log("Digite o ID do jogo!");
        id_jogo = readlinesync.questionInt("");
        jogos.listarJogoPeloId(id_jogo);

        keyPress();
        break;
      case 3:
        console.log(colors.fg.greenstrong, "\nCadastrar Jogo\n", colors.reset);
        console.log("Digite o nome do Jogo: ");
        nome = readlinesync.question("");

        console.log("Selecione o genero do jogo: ");
        genero = readlinesync.keyInSelect(generos, "", { cancel: false }) + 1;

        console.log("Digite o valor do Jogo:");
        preco = readlinesync.questionFloat("");

        console.log("Digite o nome do desenvolvedor do Jogo: ");
        desenvolvedor = readlinesync.question("");

        console.log("O jogo possui modo online? ");
        multiplayer =
          readlinesync.keyInSelect(online, "", { cancel: false }) + 1;

        console.log("Selecione a forma do jogo ( Forma Fisica/Digital) ");
        forma = readlinesync.keyInSelect(formas, "", { cancel: false }) + 1;

        switch (forma) {
          case 1:
            console.log("Digite o peso do Jogo ( em gramas):");
            peso = readlinesync.questionFloat("");
            console.log("Selecione a midia do jogo: ");
            midia = readlinesync.keyInSelect(midias, "", { cancel: false }) + 1;
            jogos.cadastrarJogo(
              new JogoFisico(
                jogos.gerarID(),
                nome,
                genero,
                preco,
                desenvolvedor,
                multiplayer,
                peso,
                midia
              )
            );
            break;
          case 2:
            console.log("Digite o tamanho do jogo (em GB):");
            tamanho = readlinesync.questionFloat("");
            console.log("Selecione a plataforma do jogo: ");
            plataforma =
              readlinesync.keyInSelect(plataformas, "", { cancel: false }) + 1;
            jogos.cadastrarJogo(
              new JogoDigital(
                jogos.gerarID(),
                nome,
                genero,
                preco,
                desenvolvedor,
                multiplayer,
                tamanho,
                plataforma
              )
            );
            break;
        }
        keyPress();
        break;
      case 4:
        console.log(colors.fg.greenstrong, "\nAtualizar Jogo\n", colors.reset);
        console.log("Digite o ID do jogo: ");
        id_jogo = readlinesync.questionInt("");
        console.log("Digite o nome do Jogo: ");
        nome = readlinesync.question("");

        console.log("Selecione o genero do jogo: ");
        genero = readlinesync.keyInSelect(generos, "", { cancel: false }) + 1;

        console.log("Digite o valor do Jogo:");
        preco = readlinesync.questionFloat("");

        console.log("Digite o nome do desenvolvedor do Jogo: ");
        desenvolvedor = readlinesync.question("");

        console.log("O jogo possui modo online? ");
        multiplayer =
          readlinesync.keyInSelect(online, "", { cancel: false }) + 1;

        console.log("Selecione a forma do jogo ( Forma Fisica/Digital) ");
        forma = readlinesync.keyInSelect(formas, "", { cancel: false }) + 1;

        switch (forma) {
          case 1:
            console.log("Digite o peso do Jogo ( em gramas):");
            peso = readlinesync.questionFloat("");
            console.log("Selecione a midia do jogo: ");
            midia = readlinesync.keyInSelect(midias, "", { cancel: false }) + 1;
            jogos.atualizarJogo(
              new JogoFisico(
                id_jogo,
                nome,
                genero,
                preco,
                desenvolvedor,
                multiplayer,
                peso,
                midia
              )
            );
            break;
          case 2:
            console.log("Digite o tamanho do jogo (em GB):");
            tamanho = readlinesync.questionFloat("");
            console.log("Selecione a plataforma do jogo: ");
            plataforma =
              readlinesync.keyInSelect(plataformas, "", { cancel: false }) + 1;
            jogos.atualizarJogo(
              new JogoDigital(
                id_jogo,
                nome,
                genero,
                preco,
                desenvolvedor,
                multiplayer,
                tamanho,
                plataforma
              )
            );
            break;
        }
        break;

      case 5:
        console.log(colors.fg.greenstrong, "\nDeletar Jogo\n", colors.reset);
        console.log("Digite o ID do Jogo!");
        id_jogo = readlinesync.questionInt("");
        jogos.deletarJogo(id_jogo);
        keyPress();
        break;
      default:
        console.log(colors.fg.green, "\nOpção Inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
}

main();
