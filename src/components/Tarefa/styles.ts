import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Tarefa'
import { Button } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'prioridade' | 'status'
}

function getTagBackgroundColor(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 16px;
  background-color: ${(props) => getTagBackgroundColor(props)};
  display: inline-block;
`

export const Description = styled.textarea`
  font-size: 14px;
  color: #8b8b8b;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Actions = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const ButtonCancelRemove = styled(Button)`
  background-color: ${variaveis.vermelho};
`
