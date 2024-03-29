import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/TasksE'

const taksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar TS',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      'Checar fork feito de curso ts da propria github',
      1
    ),
    new Task(
      'Estudar JS',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      'Pesquisar mais e ler livros, e fazer atividades',
      2
    ),
    new Task(
      'Estudar ReactS',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      'Rever cursos e praticar atraves de projetos',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = taksSlice.actions
export default taksSlice.reducer
