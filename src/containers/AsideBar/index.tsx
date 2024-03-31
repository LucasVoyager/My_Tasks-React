import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerme } from '../../store/reducers/filter'

const AsideBar = () => {
  const dispatch = useDispatch()
  const { terme } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        <S.SearchInput
          type="text"
          placeholder="buscar"
          value={terme}
          onChange={(event) => dispatch(changeTerme(event.target.value))}
        />
        <S.Filters>
          <CardFilter subtitle="pendentes" counter={1} />
          <CardFilter subtitle="concluídas" counter={7} />
          <CardFilter subtitle="urgentes" counter={2} />
          <CardFilter subtitle="importantes" counter={1} />
          <CardFilter subtitle="normal" counter={2} />
          <CardFilter active subtitle="todas" counter={12} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default AsideBar
