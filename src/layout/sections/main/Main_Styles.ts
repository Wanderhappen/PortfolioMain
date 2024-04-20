import styled from 'styled-components'
import abstract from '../../../assets/images/Abstract.svg'
import abstractLight from '../../../assets/images/AbstractLight.svg'
import abstractMobile from '../../../assets/images/AbstractMobile.svg'
import abstractMobileLight from '../../../assets/images/AbstractMobileLight.svg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

const MainTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	${font({
		Fmax: 58,
		Fmin: 42,
		weight: 700,
	})}
	color: ${props => props.theme.colors.supportFont};
	p {
		display: block;
	}

	h1 {
		${font({
			Fmax: 58,
			Fmin: 42,
			weight: 700,
		})}
	}

	@media screen and (max-width: 528px) {
		h1:first-of-type {
			display: none;
		}
		h1:last-of-type {
			display: block;
		}
	}
`
const Main = styled.section`
	background-color: ${props => props.theme.colors.primaryBg};
	min-height: 100vh;
	display: flex;
	overflow: hidden;
	@media screen and (max-width: 1033px) {
		& ${FlexWrapper} {
			flex-direction: column;
			justify-content: space-between;
		}

		${MainTitle} {
			max-width: 610px;
			width: 100%;
		}
	}
`

const Photo = styled.img`
	border-radius: 50%;
	width: 348px;
	height: 348px;
	transform: translateY(6px);

	@media ${theme.media.mobile} {
		width: 290px;
		height: 290px;
	}
`

const ContainerImg = styled.div`
	position: relative;
	border-radius: 50%;
	background-color: white;
	background-size: cover;
	background-position-x: -3px;
	&::before {
		content: '';
		top: -4px;
		left: -10px;
		right: -10px;
		bottom: -10px;
		background-image: linear-gradient(to bottom, #e70faa, #00c0fd);
		border-radius: 50%;
		position: absolute;
	}
	&::after {
		content: '';
		display: inline-block;
		background-image: url(${props =>
			props.theme.mode === 'dark' ? abstract : abstractLight});

		width: 630px;
		height: 630px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		@media ${theme.media.mobile} {
			background-image: url(${props =>
				props.theme.mode === 'dark' ? abstractMobile : abstractMobileLight});
			width: 522px;
			height: 522px;
		}
	}
`

export const S = {
	Main,
	MainTitle,
	ContainerImg,
	Photo,
}
