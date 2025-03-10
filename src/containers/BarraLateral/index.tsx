import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { Button, Input } from '../../styles'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Tarefa'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={({ target }) => dispatch(alterarTermo(target.value))}
            />
            <S.Filtro>
              <FiltroCard
                criterio="STATUS"
                valor={enums.Status.PENDENTE}
                legenda="Pendente"
              />
              <FiltroCard
                criterio="STATUS"
                valor={enums.Status.CONCLUIDA}
                legenda="Concluída"
              />
              <FiltroCard
                criterio="PRIORIDADE"
                valor={enums.Prioridade.URGENTE}
                legenda="Urgente"
              />
              <FiltroCard
                criterio="PRIORIDADE"
                valor={enums.Prioridade.IMPORTANTE}
                legenda="Importante"
              />
              <FiltroCard
                criterio="PRIORIDADE"
                valor={enums.Prioridade.NORMAL}
                legenda="Normal"
              />
              <FiltroCard criterio="TODAS" legenda="Todas" />
            </S.Filtro>
          </>
        ) : (
          <Button onClick={() => navigator('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
