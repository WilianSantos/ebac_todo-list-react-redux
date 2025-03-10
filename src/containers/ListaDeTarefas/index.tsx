import { useSelector } from 'react-redux'

import * as S from '../../styles'

import Tarefa from '../../components/Tarefa'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let itensFiltrados = itens
    if (termo !== undefined) {
      itensFiltrados = itensFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) > -1
      )

      if (criterio === 'STATUS') {
        itensFiltrados = itensFiltrados.filter((item) => item.status === valor)
      } else if (criterio === 'PRIORIDADE') {
        itensFiltrados = itensFiltrados.filter(
          (item) => item.prioridade === valor
        )
      }
      return itensFiltrados
    }
    return itens
  }

  const exibeResultadoFiltro = (quantidade: number) => {
    let mesagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    if (criterio === 'TODAS') {
      mesagem = `${quantidade} tarefa(s) marcada(s) como: "${criterio}" ${complemento}`
    } else {
      mesagem = `${quantidade} tarefa(s) marcada(s) como: "${criterio} = ${valor}" ${complemento}`
    }
    return mesagem
  }

  const tarefas = filtraTarefas()

  return (
    <S.MainContainer>
      <S.Titulo as="p">{exibeResultadoFiltro(tarefas.length)}</S.Titulo>
      <ul>
        {tarefas.map((item) => (
          <li key={item.titulo}>
            <Tarefa
              id={item.id}
              titulo={item.titulo}
              prioridade={item.prioridade}
              status={item.status}
              descricao={item.descricao}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}

export default ListaDeTarefas
