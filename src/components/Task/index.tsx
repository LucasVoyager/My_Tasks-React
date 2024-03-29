import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/TasksE'
import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ description, status, title, priority, id }: Props) => {
  const dispatch = useDispatch()
  const [isEdit, setEdit] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionsBar>
        {isEdit ? (
          <>
            <S.ButtonSaved>Salvar</S.ButtonSaved>
            <S.ButtonCancel onClick={() => setEdit(false)}>
              Cancelar
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <S.Buttons onClick={() => setEdit(true)}>Editar</S.Buttons>
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
