import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Title>Nome da tarefa</S.Title>
    <S.Tag>Importante</S.Tag>
    <S.Tag>Pendente</S.Tag>
    <S.Description />
    <S.ActionsBar>
      <S.Buttons>Editar</S.Buttons>
      <S.Buttons>Remover</S.Buttons>
    </S.ActionsBar>
  </S.Card>
)

export default Task
