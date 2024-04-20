import styled from 'styled-components'

type GradientPropsType = {
	direction?: string
	firstColor: string
	secondColor: string
}

export const Gradient = styled.span<GradientPropsType>`
	display: inline-block;
	background-image: linear-gradient(
		${props => props.direction || 'to right'},
		${props => props.firstColor},
		${props => props.secondColor}
	);
	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
`
