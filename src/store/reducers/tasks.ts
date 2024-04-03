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
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskIsExist = state.itens.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLocaleLowerCase()
      )

      if (taskIsExist) {
        alert('já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finally: boolean }>
    ) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTask >= 0) {
        state.itens[indexTask].status = action.payload.finally
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, register, changeStatus } = taksSlice.actions
export default taksSlice.reducer
