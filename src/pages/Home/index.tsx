import ButtonAdd from '../../components/ButtonAdd'
import AsideBar from '../../containers/AsideBar'
import TasksList from '../../containers/TasksList'

const Home = () => (
  <>
    <AsideBar showFilters />
    <TasksList />
    <ButtonAdd />
  </>
)

export default Home
