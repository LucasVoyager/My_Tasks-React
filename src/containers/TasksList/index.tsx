import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { ContainerTL } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { terme } = useSelector((state: RootReducer) => state.filter)

  const filterTask = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(terme.toLocaleLowerCase()) >= 0
    )
  }

  return (
    <ContainerTL>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{terme}&ldquo;
      </p>
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
