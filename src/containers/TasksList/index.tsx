import Task from '../../components/Task'
import { ContainerTL } from './styles'

const TasksList = () => (
  <ContainerTL>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </ContainerTL>
)

export default TasksList
