import styled from 'styled-components'
import { font } from '../styles/Common'

export const SectionTitle = styled.h2`
	${font({ weight: 700, Fmax: 48, Fmin: 40 })}
	text-align: center;
	line-height: 26px;
	color: ${props => props.theme.colors.primaryFont};
`
