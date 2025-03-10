import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar Redux',
      descricao: 'Estudar Redux Toolkit',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 2,
      titulo: 'Estudar React',
      descricao: 'Estudar React Hooks',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 3,
      titulo: 'Estudar TypeScript',
      descricao: 'Estudar TypeScript',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 4,
      titulo: 'Estudar JavaScript',
      descricao: 'Estudar JavaScript',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.URGENTE
    },
    {
      id: 5,
      titulo: 'Estudar CSS',
      descricao: 'Estudar CSS',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 6,
      titulo: 'Estudar HTML',
      descricao: 'Estudar HTML',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 7,
      titulo: 'Estudar Node.js',
      descricao: 'Estudar Node.js',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.URGENTE
    },
    {
      id: 8,
      titulo: 'Estudar Express',
      descricao: 'Estudar Express',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 9,
      titulo: 'Estudar MongoDB',
      descricao: 'Estudar MongoDB',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 10,
      titulo: 'Estudar MySQL',
      descricao: 'Estudar MySQL',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 11,
      titulo: 'Estudar PostgreSQL',
      descricao: 'Estudar PostgreSQL',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 12,
      titulo: 'Estudar Git',
      descricao: 'Estudar Git',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 13,
      titulo: 'Estudar GitHub',
      descricao: 'Estudar GitHub',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.URGENTE
    },
    {
      id: 14,
      titulo: 'Estudar GitLab',
      descricao: 'Estudar GitLab',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 15,
      titulo: 'Estudar Docker',
      descricao: 'Estudar Docker',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 16,
      titulo: 'Estudar Kubernetes',
      descricao: 'Estudar Kubernetes',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.IMPORTANTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const index = state.itens.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export default tarefasSlice.reducer
export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
