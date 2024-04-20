import styled, { css } from 'styled-components'

const MobileMenu = styled.nav``
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99999;
	background-color: rgba(31, 31, 32, 0.898);
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(-100%);
	transition: transform 0.5s;

	${(props: { isOpen: boolean }) =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			transform: translateY(0);
		`}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
	position: fixed;
	top: -100px;
	right: -100px;
	width: 200px;
	height: 200px;
	z-index: 999999999;

	span {
		display: block;
		width: 36px;
		height: 2px;
		background-color: #ffff;
		position: absolute;
		left: 40px;
		bottom: 50px;

		${props =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background-color: rgba(255, 255, 255, 0);
			`}

		&::before {
			content: '';
			display: block;
			width: 36px;
			height: 2px;
			background-color: #ffff;
			position: absolute;
			transform: translateY(-10px);
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(-45deg) translateY(0px);
				`}
		}

		&::after {
			content: '';
			display: block;
			width: 24px;
			height: 2px;
			background-color: #ffff;
			position: absolute;
			transform: translateY(10px);
			${props =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(45deg) translateY(0px);
					width: 36px;
				`}
		}
	}
`
export const S = {
	MobileMenu,
	MobileMenuPopup,
	BurgerButton,
}
