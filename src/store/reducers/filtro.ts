import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
  termo?: string
  criterio: 'STATUS' | 'PRIORIDADE' | 'TODAS'
  valor?: enums.Status | enums.Prioridade
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'TODAS'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alteraFiltro } = filtroSlice.actions
export default filtroSlice.reducer
