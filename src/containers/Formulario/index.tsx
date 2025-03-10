import { FormEvent, useState } from 'react'
import { MainContainer, Titulo, Input, ButtonSave } from '../../styles'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <S.Form onSubmit={cadastrarTarefa}>
        <Input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
        />
        <Input
          as="textarea"
          placeholder="Descrição"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
        />
        <S.Opcoes>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <S.Opcao key={prioridade}>
              <input
                name="prioridade"
                type="radio"
                id={prioridade}
                value={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={({ target }) =>
                  setPrioridade(target.value as enums.Prioridade)
                }
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
