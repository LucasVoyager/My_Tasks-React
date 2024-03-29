import { useState } from 'react'
import * as S from './styles'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

const Task = ({ description, status, title, priority }: Props) => {
  const [isEdit, setEdit] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag>{priority}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={description} />
      <S.ActionsBar>
        {isEdit ? (
          <>
            <S.Buttons>Salvar</S.Buttons>
            <S.Buttons onClick={() => setEdit(false)}>Cancelar</S.Buttons>
          </>
        ) : (
          <>
            <S.Buttons onClick={() => setEdit(true)}>Editar</S.Buttons>
            <S.Buttons>Remover</S.Buttons>
          </>
        )}
      </S.ActionsBar>
    </S.Card>
  )
}

export default Task
