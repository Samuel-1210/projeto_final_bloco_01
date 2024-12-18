import { colors } from "./src/util/Colors";
import readlinesync = require("readline-sync");
import { keyPress, sobre } from "./src/util/FuncoesRepetidas";
import { JogoFisico } from "./src/model/JogoFisico";
import { JogoDigital } from "./src/model/JogoDigital";
import { JogoController } from "./src/Controller.ts/JogoController";

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

  // Arrays contendo opcoes
  const plataformas = ["XBOX", "PlayStation", "PC"]; // plataformas
  const online = ["Nao", "Sim"]; // é multiplayer?
  const generos = ["RPG", "Corrida", "Esporte", "Acao", "Aventura"]; // Gêneros
  const midias = ["DVD", "CD", "BluRay"]; // Tipo de midia
  const formas = ["Fisica", "Digital"]; // Forma de jogo

  // Instancia o controlador de jogos
  const jogos = new JogoController();

  //Cadastro de jogos para teste
  // Jogo Digital 1
  jogos.cadastrarJogo(
    new JogoDigital(
      jogos.gerarID(),
      "Cyberpunk 2077",
      1, //genero
      249.99,
      "CD Projekt",
      2, // multiplayer
      70, //tamanho
      3 // plataforma
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
      2
    )
  );
  // Jogo Físico 1
  jogos.cadastrarJogo(
    new JogoFisico(
      jogos.gerarID(),
      "Spider-Man: Miles Morales",
      4, //genero
      199.99,
      "Insomniac Games",
      2, // multiplayer
      400, // Peso em KG
      1 // midias
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
      2,
      500,
      3
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
        jogos.listarTodosJogos(); // Chama a função que lista todos os jogos
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
        jogos.listarJogoPeloId(id_jogo); //Chama a função que lista o jogo pelo ID fornecido

        keyPress();
        break;
      case 3:
        console.log(colors.fg.greenstrong, "\nCadastrar Jogo\n", colors.reset);
        // solicita nome enquanto nao for preenchido
        while (true) {
          console.log("Digite o nome do Jogo: ");
          nome = readlinesync.question("");
          if (!nome || nome.trim() === "")
            console.log("O nome do jogo não pode ser vazio!\n");
          else break;
        }
        console.log("Selecione o genero do jogo: ");
        genero = readlinesync.keyInSelect(generos, "", { cancel: false }) + 1;

        // solicita preco enquanto nao for maior que 0
        while (true) {
          console.log("Digite o valor do Jogo:");
          preco = readlinesync.questionFloat("");
          if (preco <= 0) console.log("O valor deve ser maior que 0!\n");
          else break;
        }

        // solicita nome do dev enquanto nao for preenchido
        while (true) {
          console.log("Digite o nome do desenvolvedor do Jogo: ");
          desenvolvedor = readlinesync.question("");
          if (!desenvolvedor || desenvolvedor.trim() === "")
            console.log("O nome do desenvolvedor não pode ser vazio!\n");
          else break;
        }

        console.log("O jogo possui modo online? ");
        multiplayer =
          readlinesync.keyInSelect(online, "", { cancel: false }) + 1;

        console.log("Selecione a forma do jogo ( Forma Fisica/Digital) ");
        forma = readlinesync.keyInSelect(formas, "", { cancel: false }) + 1;

        // Decidindo se o novo jogo será fisico ou digital
        switch (forma) {
          case 1:
            // solicita peso enquanto nao for maior que 0
            while (true) {
              console.log("Digite o peso do Jogo ( em gramas):");
              peso = readlinesync.questionFloat("");
              if (peso <= 0) console.log("O peso deve ser maior que 0!\n");
              else break;
            }

            console.log("Selecione a midia do jogo: ");
            midia = readlinesync.keyInSelect(midias, "", { cancel: false }) + 1;
            // Criando novo jogo fisico
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
            // solicita tamanho  enquanto nao for maior que 0 ( por tratar de GB, eu entendo que poderia ser menor que 1)
            while (true) {
              console.log("Digite o tamanho do jogo (em GB):");
              tamanho = readlinesync.questionFloat("");
              if (tamanho <= 0)
                // Sei que pode ter menos que 1gb, mas entraria um lógica que no momento não dá pra fazer o.O
                console.log("O tamanho deve ser maior que 0!\n");
              else break;
            }
            console.log("Selecione a plataforma do jogo: ");
            plataforma =
              readlinesync.keyInSelect(plataformas, "", { cancel: false }) + 1;
            // Criando novo jogo digital
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
        // Segue os mesmos principios do cadastro de jogo
        console.log(colors.fg.greenstrong, "\nAtualizar Jogo\n", colors.reset);

        console.log("Digite o ID do jogo: ");
        id_jogo = readlinesync.questionInt("");

        let jogo = jogos.buscaJogo(id_jogo);
        if (jogo !== null) {
          // solicita nome enquanto nao for preenchido
          while (true) {
            console.log("Digite o nome do Jogo: ");
            nome = readlinesync.question("");

            if (!nome || nome.trim() === "")
              console.log("O nome do jogo não pode ser vazio!\n");
            else break;
          }
          console.log("Selecione o genero do jogo: ");
          genero = readlinesync.keyInSelect(generos, "", { cancel: false }) + 1;

          // solicita valor enquanto nao for maior que 0
          while (true) {
            console.log("Digite o valor do Jogo:");
            preco = readlinesync.questionFloat("");
            if (preco <= 0) console.log("O valor deve ser maior que 0!\n");
            else break;
          }
          // solicita nome do desenvolvedor enquanto nao for preenchido
          while (true) {
            console.log("Digite o nome do desenvolvedor do Jogo: ");
            desenvolvedor = readlinesync.question("");
            if (!desenvolvedor || desenvolvedor.trim() === "")
              console.log("O nome do desenvolvedor não pode ser vazio!\n");
            else break;
          }

          console.log("O jogo possui modo online? ");
          multiplayer =
            readlinesync.keyInSelect(online, "", { cancel: false }) + 1;

          console.log("Selecione a forma do jogo ( Forma Fisica/Digital) ");
          forma = readlinesync.keyInSelect(formas, "", { cancel: false }) + 1;

          switch (forma) {
            case 1:
              // solicita peso  enquanto nao for maior que 0
              while (true) {
                console.log("Digite o peso do Jogo ( em gramas):");
                peso = readlinesync.questionFloat("");
                if (peso <= 0) console.log("O peso deve ser maior que 0!\n");
                else break;
              }

              console.log("Selecione a midia do jogo: ");
              midia =
                readlinesync.keyInSelect(midias, "", { cancel: false }) + 1;

              jogos.atualizarJogo(
                // ATUALIAZNDO novo jogo fisico
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
              while (true) {
                // solicita tamanho  enquanto nao for maior que 0 ( por tratar de GB, eu entendo que poderia ser menor que 1)
                console.log("Digite o tamanho do jogo (em GB):");
                tamanho = readlinesync.questionFloat("");
                if (tamanho <= 0)
                  // Sei que pode ter menos que 1gb, mas entraria um lógica que no momento não dá pra fazer o.O
                  console.log("O tamanho deve ser maior que 0!\n");
                else break;
              }
              console.log("Selecione a plataforma do jogo: ");
              plataforma =
                readlinesync.keyInSelect(plataformas, "", { cancel: false }) +
                1;
              jogos.atualizarJogo(
                // ATUALIAZNDO novo jogo digital
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
        } else console.log("Produto não encontrado");

        keyPress();
        break;

      case 5:
        console.log(colors.fg.greenstrong, "\nDeletar Jogo\n", colors.reset);
        console.log("Digite o ID do Jogo!");
        id_jogo = readlinesync.questionInt("");

        let jogoDeletar = jogos.buscaJogo(id_jogo);
        // Verificação se o produto com ID inserido existe
        if (jogoDeletar == null) console.log("Produto não encontrado!");
        else {
          console.log(
            colors.fg.redstrong + jogoDeletar.titulo_jogo + colors.reset
          );

          if (readlinesync.keyInYN("Deseja realmente deletar o jogo acima?")) {
            // chama a função de deletar jogo, com parâmetro que usuario inseriu.
            jogos.deletarJogo(id_jogo);
          } else console.log("Operação Cancelada");
        }

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
