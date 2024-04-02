import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { ContainerTL, Result } from './styles'
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

  const showResultFilter = (quantity: number) => {
    let message = ''
    const complement =
      terme !== undefined && terme.length > 0 ? `e "${terme}"` : ''

    if (criteria === 'todas') {
      message = `${quantity} tarefa(s) encontrada(s) como: todas ${complement}`
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como: "${`${criteria} = ${valuePS}`}" ${complement}`
    }

    return message
  }

  const tasks = filterTask()
  const message = showResultFilter(tasks.length)

  return (
    <ContainerTL>
      <Result>{message}</Result>
      <ul>
        {tasks.map((t) => (
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
