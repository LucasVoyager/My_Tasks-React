import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerme } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/TasksE'
import { InputST } from '../../styles'

const AsideBar = () => {
  const dispatch = useDispatch()
  const { terme } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        <InputST
          type="text"
          placeholder="buscar"
          value={terme}
          onChange={(event) => dispatch(changeTerme(event.target.value))}
        />
        <S.Filters>
          <CardFilter
            valuePS={enums.Status.PENDENTE}
            criteria="status"
            subtitle="pendentes"
          />
          <CardFilter
            valuePS={enums.Status.CONCLUIDA}
            criteria="status"
            subtitle="concluídas"
          />
          <CardFilter
            valuePS={enums.Priority.URGENTE}
            criteria="prioridade"
            subtitle="urgentes"
          />
          <CardFilter
            valuePS={enums.Priority.IMPORTANTE}
            criteria="prioridade"
            subtitle="importantes"
          />
          <CardFilter
            valuePS={enums.Priority.NORMAL}
            criteria="prioridade"
            subtitle="normal"
          />
          <CardFilter criteria="todas" subtitle="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default AsideBar
