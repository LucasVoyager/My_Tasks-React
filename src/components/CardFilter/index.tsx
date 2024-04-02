import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/TasksE'
import { RootReducer } from '../../store'

export type Props = {
  subtitle: string
  criteria: 'prioridade' | 'status' | 'todas'
  valuePS?: enums.Priority | enums.Status
}

const CardFilter = ({ subtitle, criteria, valuePS }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkIsActive = () => {
    const criteriaEqual = filter.criteria === criteria
    const valueEqual = filter.valuePS === valuePS

    return criteriaEqual && valueEqual
  }

  const counterTasks = () => {
    if (criteria === 'todas') return tasks.itens.length
    if (criteria === 'prioridade') {
      return tasks.itens.filter((item) => item.priority === valuePS).length
    }
    if (criteria == 'status') {
      return tasks.itens.filter((item) => item.status === valuePS).length
    }
  }

  const filterCF = () => {
    dispatch(
      changeFilter({
        criteria,
        valuePS
      })
    )
  }

  const counterTK = counterTasks()
  const activeCA = checkIsActive()

  return (
    <S.Card active={activeCA} onClick={filterCF}>
      <S.Counter>{counterTK}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default CardFilter
