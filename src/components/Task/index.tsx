import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove, edit, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { ButtonSaved, Buttons } from '../../styles'

import * as enums from '../../utils/enums/TasksE'

type Props = TaskClass

const Task = ({
  description: descriptionOrigin,
  status,
  title,
  priority,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEdit, setEdit] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOrigin.length > 0) {
      setDescription(descriptionOrigin)
    }
  }, [descriptionOrigin])

  function cancelEdit() {
    setEdit(false)
    setDescription(descriptionOrigin)
  }

  function changeStatusTask(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, finally: event.target.checked }))
  }
  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={changeStatusTask}
        />
        <S.Title>
          {isEdit && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEdit}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionsBar>
        {isEdit ? (
          <>
            <ButtonSaved
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    status,
                    title,
                    priority,
                    id
                  })
                )
                setEdit(false)
              }}
            >
              Salvar
            </ButtonSaved>
            <S.ButtonCancel onClick={() => cancelEdit()}>
              Cancelar
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <Buttons onClick={() => setEdit(true)}>Editar</Buttons>
            <S.ButtonRemoved onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonRemoved>
          </>
        )}
      </S.ActionsBar>
    </S.Card>
  )
}

export default Task
