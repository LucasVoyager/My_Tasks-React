import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { ContainerTL } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { terme, criteria, valuePS } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTask = () => {
    let tasksFilters = itens
    if (terme !== undefined) {
      tasksFilters = tasksFilters.filter(
        (item) =>
          item.title.toLowerCase().search(terme.toLocaleLowerCase()) >= 0
      )

      if (criteria === 'prioridade') {
        tasksFilters = tasksFilters.filter((item) => item.priority === valuePS)
      } else if (criteria === 'status') {
        tasksFilters = tasksFilters.filter((item) => item.status === valuePS)
      }
      return tasksFilters
    } else {
      return itens
    }
  }

  return (
    <ContainerTL>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{terme}&ldquo;
      </p>
      <ul>
        <li>{terme}</li>
        <li>{criteria}</li>
        <li>{valuePS}</li>
      </ul>
      <ul>
        {filterTask().map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </ContainerTL>
  )
}

export default TasksList
