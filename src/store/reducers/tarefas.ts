import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Estudar Redux',
      'Estudar Redux Toolkit',
      enums.Status.PENDENTE,
      enums.Prioridade.IMPORTANTE
    ),
    new Tarefa(
      2,
      'Estudar React',
      'Estudar React Hooks',
      enums.Status.PENDENTE,
      enums.Prioridade.NORMAL
    ),
    new Tarefa(
      3,
      'Estudar TypeScript',
      'Estudar TypeScript',
      enums.Status.CONCLUIDA,
      enums.Prioridade.IMPORTANTE
    ),
    new Tarefa(
      4,
      'Estudar JavaScript',
      'Estudar JavaScript',
      enums.Status.CONCLUIDA,
      enums.Prioridade.URGENTE
    ),
    new Tarefa(
      5,
      'Estudar CSS',
      'Estudar CSS',
      enums.Status.PENDENTE,
      enums.Prioridade.IMPORTANTE
    ),
    new Tarefa(
      6,
      'Estudar HTML',
      'Estudar HTML',
      enums.Status.PENDENTE,
      enums.Prioridade.NORMAL
    ),
    new Tarefa(
      7,
      'Estudar Node.js',
      'Estudar Node.js',
      enums.Status.CONCLUIDA,
      enums.Prioridade.URGENTE
    ),
    new Tarefa(
      8,
      'Estudar Express',
      'Estudar Express',
      enums.Status.PENDENTE,
      enums.Prioridade.NORMAL
    ),
    new Tarefa(
      9,
      'Estudar MongoDB',
      'Estudar MongoDB',
      enums.Status.CONCLUIDA,
      enums.Prioridade.NORMAL
    ),
    new Tarefa(
      10,
      'Estudar MySQL',
      'Estudar MySQL',
      enums.Status.PENDENTE,
      enums.Prioridade.IMPORTANTE
    ),
    new Tarefa(
      11,
      'Estudar PostgreSQL',
      'Estudar PostgreSQL',
      enums.Status.PENDENTE,
      enums.Prioridade.NORMAL
    ),
    new Tarefa(
      12,
      'Estudar Git',
      'Estudar Git',
      enums.Status.PENDENTE,
      enums.Prioridade.NORMAL
    ),
    new Tarefa(
      13,
      'Estudar GitHub',
      'Estudar GitHub',
      enums.Status.CONCLUIDA,
      enums.Prioridade.URGENTE
    ),
    new Tarefa(
      14,
      'Estudar GitLab',
      'Estudar GitLab',
      enums.Status.PENDENTE,
      enums.Prioridade.IMPORTANTE
    ),
    new Tarefa(
      15,
      'Estudar Docker',
      'Estudar Docker',
      enums.Status.CONCLUIDA,
      enums.Prioridade.NORMAL
    ),
    new Tarefa(
      16,
      'Estudar Kubernetes',
      'Estudar Kubernetes',
      enums.Status.CONCLUIDA,
      enums.Prioridade.IMPORTANTE
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export default tarefasSlice.reducer
export const { remover } = tarefasSlice.actions
