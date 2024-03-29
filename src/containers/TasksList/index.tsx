import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { ContainerTL } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)

  return (
    <ContainerTL>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
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
