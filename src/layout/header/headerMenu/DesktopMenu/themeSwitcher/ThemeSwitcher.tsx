// ThemeSwitcher.tsx
import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../components/icon/Icon'

type ThemeSwitcherPropsType = {
	toggleTheme: () => void
}

export const ThemeSwitcher: React.FC<ThemeSwitcherPropsType> = ({
	toggleTheme,
}) => {
	return (
		<StyledThemeSwitcher>
			<Button onClick={toggleTheme}>
				<Icon iconId='moon' width='24' height='24' />
				<Icon iconId='sun' width='24' height='24' />
			</Button>
		</StyledThemeSwitcher>
	)
}

const StyledThemeSwitcher = styled.div``

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	background-color: #a5a5a5;
	width: 74px;
	height: 35px;
	border-radius: 70px;
	padding: 0 6px;

	position: relative;
	z-index: 0;

	& svg:first-child {
		color: ${props => (props.theme.mode === 'dark' ? 'black' : 'white')};
	}
	& svg:nth-child(2) {
		color: ${props => (props.theme.mode === 'dark' ? 'white' : 'black')};
	}
	&::before {
		content: '';
		width: 32px;
		height: 32px;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		left: ${props => (props.theme.mode === 'dark' ? '25%' : '76%')};
		background-color: ${props =>
			props.theme.mode === 'dark' ? 'blue' : '#f9f900'};
	}
`
