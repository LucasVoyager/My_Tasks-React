import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerme } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/TasksE'
import { Buttons, InputST } from '../../styles'

type Props = {
  showFilters: boolean
}

const AsideBar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { terme } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
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
          </>
        ) : (
          <Buttons onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Buttons>
        )}
      </div>
    </S.Aside>
  )
}
export default AsideBar
