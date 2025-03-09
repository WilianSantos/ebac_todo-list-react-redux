import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtro>
        <FiltroCard legenda="Pendente" contador={6} />
        <FiltroCard legenda="Em andamento" contador={12} />
        <FiltroCard legenda="Concluído" contador={2} />
        <FiltroCard legenda="Cancelado" contador={1} />
      </S.Filtro>
    </div>
  </S.Aside>
)

export default BarraLateral
