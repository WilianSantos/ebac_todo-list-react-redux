import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

import TarefaClass from '../../models/Tarefa'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import { Button, ButtonSave } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)

  const [descricao, setDescricao] = useState('')
  useEffect(() => {
    if (descOriginal.length > 0) {
      setDescricao(descOriginal)
    }
  }, [descOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descOriginal)
  }

  function salvarEdicao() {
    dispatch(editar({ id, titulo, prioridade, status, descricao }))
    setEstaEditando(false)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Title>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Title>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!estaEditando}
        value={descricao}
        onChange={({ target }) => setDescricao(target.value)}
      />
      <S.Actions>
        {estaEditando ? (
          <>
            <ButtonSave onClick={() => salvarEdicao()}>Salvar</ButtonSave>
            <S.ButtonCancelRemove onClick={() => cancelarEdicao()}>
              Cancelar
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)}>Editar</Button>
            <S.ButtonCancelRemove onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonCancelRemove>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Tarefa
