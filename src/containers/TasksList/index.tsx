import Task from '../../components/Task'
import { ContainerTL } from './styles'

const tasks = [
  {
    title: 'Estudar Typescript',
    description: 'Verificar o fork feito de aulas typescript da github',
    priority: 'importante',
    status: 'Pendente'
  },
  {
    title: 'Estudar Python',
    description:
      'Continuar curso na Udemy para aprimorar conhecimento de Python',
    priority: 'importante',
    status: 'Pendente'
  },
  {
    title: 'Treinar academia',
    description: 'academia todos os dias da semana e basquete aos sabados',
    priority: 'importante',
    status: 'Pendente'
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
