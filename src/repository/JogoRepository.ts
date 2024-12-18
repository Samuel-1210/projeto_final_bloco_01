import { Jogo } from "../model/Jogo";

export interface JogoRepository {
  listarTodosJogos(): void;
  listarJogoPeloId(id_jogo: number): void;
  cadastrarJogo(jogo: Jogo): void;
  atualizarJogo(jogo: Jogo): void;
  deletarJogo(id_jogo: number): void;
}
