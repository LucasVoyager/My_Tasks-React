import Task from '../../components/Task'
import { ContainerTL } from './styles'
import * as enums from '../../utils/enums/TasksE'

const tasks = [
  {
    title: 'Estudar Typescript',
    description: 'Verificar o fork feito de aulas typescript da github',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    title: 'Estudar Python',
    description:
      'Continuar curso na Udemy para aprimorar conhecimento de Python',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    title: 'Treinar academia',
    description: 'academia todos os dias da semana e basquete aos sabados',
    priority: enums.Priority.URGENTE,
    status: enums.Status.CONCLUIDA
  }
]

const TasksList = () => (
  <ContainerTL>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
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

export default TasksList
