import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/TasksE'

type TaskState = {
  itens: Task[]
}

const initialState: TaskState = {
  itens: [
    {
      id: 1,
      description: 'Checar fork feito de curso ts da propria github',
      title: 'Estudar TS',
      status: enums.Status.PENDENTE,
      priority: enums.Priority.IMPORTANTE
    },
    {
      id: 2,
      description: 'Pesquisar mais e ler livros, e fazer atividades',
      title: 'Estudar JS',
      status: enums.Status.CONCLUIDA,
      priority: enums.Priority.IMPORTANTE
    },
    {
      id: 3,
      description: 'Rever cursos e praticar atraves de projetos',
      title: 'Estudar React',
      status: enums.Status.PENDENTE,
      priority: enums.Priority.IMPORTANTE
    }
  ]
}

const taksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = taksSlice.actions
export default taksSlice.reducer
