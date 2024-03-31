import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/TasksE'

type FilterState = {
  terme: string
  criteria: 'prioridade' | 'status' | 'todas'
  valuePS?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  terme: '',
  criteria: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerme: (state, action: PayloadAction<string>) => {
      state.terme = action.payload
    }
  }
})

export const { changeTerme } = filterSlice.actions
export default filterSlice.reducer
