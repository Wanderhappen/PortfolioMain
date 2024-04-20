import styled from 'styled-components'
import { font } from '../styles/Common'

export const SubsectionTitle = styled.span`
	${font({ Fmax: 32, Fmin: 26.5 })}
	display: block;

	text-align: center;
	color: ${props => props.theme.colors.secondaryFont};

	margin: 50px auto 120px;
`
