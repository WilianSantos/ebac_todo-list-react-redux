import styled from 'styled-components'

import { Props } from '.'

type semLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<semLegendaEContador>`
  padding: 8px;
  border: 1px solid ${({ ativo }) => (ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${({ ativo }) => (ativo ? '#fff' : '#fcfcfc')};
  color: ${({ ativo }) => (ativo ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
