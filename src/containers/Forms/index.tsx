import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ContainerTL, Title, InputST, ButtonSaved } from '../../styles'
import { Form, Options, Option } from './styles'
import * as enums from '../../utils/enums/TasksE'
import Task from '../../models/Task'
import { register } from '../../store/reducers/tasks'

const FormsAT = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (eventRT: FormEvent) => {
    eventRT.preventDefault()
    const taskAdd = new Task(
      title,
      priority,
      enums.Status.PENDENTE,
      description,
      9
    )

    dispatch(register(taskAdd))
    navigate('/')
  }

  return (
    <ContainerTL>
      <Title>Nova tarefa</Title>
      <Form onSubmit={registerTask}>
        <InputST
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="titulo"
        />
        <InputST
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        ></InputST>
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priorityFR) => (
            <Option key={priorityFR}>
              <input
                value={priorityFR}
                name="prioridade"
                type="radio"
                onChange={(event) =>
                  setPriority(event.target.value as enums.Priority)
                }
                id={priorityFR}
                defaultChecked={priority === enums.Priority.NORMAL}
              />{' '}
              <label htmlFor={priorityFR}>{priorityFR}</label>
            </Option>
          ))}
        </Options>
        <ButtonSaved type="submit">Cadastrar</ButtonSaved>
      </Form>
    </ContainerTL>
  )
}

export default FormsAT
