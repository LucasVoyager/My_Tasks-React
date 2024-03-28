import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const AsideBar = () => (
  <S.Aside>
    <S.SearchInput type="text" placeholder="buscar" />
    <S.Filters>
      <CardFilter subtitle="pendentes" counter={1} />
      <CardFilter subtitle="concluídas" counter={7} />
      <CardFilter subtitle="urgentes" counter={2} />
      <CardFilter subtitle="importantes" counter={1} />
      <CardFilter subtitle="normal" counter={2} />
      <CardFilter active subtitle="todas" counter={12} />
    </S.Filters>
  </S.Aside>
)

export default AsideBar
