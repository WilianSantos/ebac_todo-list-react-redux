import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  id: number
  titulo: string
  descricao: string
  status: enums.Status
  prioridade: enums.Prioridade

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    status: enums.Status,
    prioridade: enums.Prioridade
  ) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.status = status
    this.prioridade = prioridade
  }
}

export default Tarefa
