import { Jogo } from "../model/Jogo";

// Define a interface JogoRepository para padronizar as operações relacionadas ao gerenciamento de Jogos

export interface JogoRepository {
  listarTodosJogos(): void;
  listarJogoPeloId(id_jogo: number): void;
  cadastrarJogo(jogo: Jogo): void;
  atualizarJogo(jogo: Jogo): void;
  deletarJogo(id_jogo: number): void;
}
