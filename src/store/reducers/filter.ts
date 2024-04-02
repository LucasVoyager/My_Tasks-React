import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/TasksE'

type FilterState = {
  terme?: string
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
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criteria = action.payload.criteria
      state.valuePS = action.payload.valuePS
    }
  }
})

export const { changeTerme, changeFilter } = filterSlice.actions
export default filterSlice.reducer
