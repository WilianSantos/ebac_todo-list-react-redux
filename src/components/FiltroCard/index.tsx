import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'
import { alteraFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'PRIORIDADE' | 'STATUS' | 'TODAS'
  valor?: enums.Status | enums.Prioridade
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const filtrar = () => {
    dispatch(alteraFiltro({ criterio, valor }))
  }

  function verificaAtivo() {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const ativo = verificaAtivo()

  function contaTarefas() {
    if (criterio === 'TODAS') return tarefas.itens.length
    if (criterio === 'STATUS') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
    if (criterio === 'PRIORIDADE') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    return 0
  }

  const contador = contaTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
