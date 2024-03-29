import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/TasksE'
type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ description, status, title, priority }: Props) => {
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
            <S.ButtonRemoved>Remover</S.ButtonRemoved>
          </>
        )}
      </S.ActionsBar>
    </S.Card>
  )
}

export default Task
