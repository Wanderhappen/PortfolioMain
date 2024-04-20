import styled from 'styled-components'
import { font } from '../../../styles/Common'

const Contact = styled.section`
	text-align: center;
	background-color: ${props => props.theme.colors.primaryBg};
`
const Title = styled.h2`
	${font({
		family: 'DM Sans, sans-serif',
		Fmax: 58,
		Fmin: 42,
		weight: 700,
	})}
	letter-spacing: -1px;
	color: ${props => props.theme.colors.primaryFont};
	margin-bottom: 10px;
`

const Mail = styled.a`
	${font({
		family: 'DM Sans, sans-serif',
		Fmax: 58,
		Fmin: 42,
		weight: 700,
	})}
	line-height: 70px;
	letter-spacing: -1px;
	color: transparent;
`

export const S = {
	Mail,
	Title,
	Contact,
}
