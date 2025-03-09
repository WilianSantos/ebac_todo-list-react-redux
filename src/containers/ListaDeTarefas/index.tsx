import { useSelector } from 'react-redux'

import * as S from './styles'

import Tarefa from '../../components/Tarefa'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <S.MainContainer>
      <p>2 tarefas marcadas como: &quot;Categoria&quot; &quot;Termo&quot;</p>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <Tarefa
              titulo={tarefa.titulo}
              prioridade={tarefa.prioridade}
              status={tarefa.status}
              descricao={tarefa.descricao}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}

export default ListaDeTarefas
