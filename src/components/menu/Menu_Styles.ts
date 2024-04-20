import { Link } from 'react-scroll'
import styled from 'styled-components'

const Menu = styled.nav<{ gap?: string; direction?: string }>`
	ul {
		display: flex;
		justify-content: space-between;
		flex-direction: ${props => props.direction || 'row'};
		gap: ${props => props.gap || '15px'};
		width: 100%;
		max-width: 546px;
	}
`

const ListItem = styled.li`
	white-space: nowrap;
`
const NavLink = styled(Link)<{ fontSize?: string; fontWeight?: string }>`
	font-family: DM Sans, sans-serif;
	font-size: ${props => props.fontSize || '20px'};
	font-weight: ${props => props.fontWeight || 500};
	line-height: 26px;
	text-decoration: none;
	color: ${props => props.theme.colors.secondaryFont};
	position: relative;

	&::before {
		content: '';
		height: 1px;
		background-image: linear-gradient(90deg, #e70faa 0%, #13b0f5 100%);
		position: absolute;
		left: 50%;
		right: 50%;
		bottom: -5px;
		@keyframes gradient {
			0% {
				left: 40%;
				right: 40%;
			}

			100% {
				left: 0;
				right: 0;
			}
		}
	}

	&:hover,
	&.active {
		background-image: linear-gradient(90deg, #e70faa 0%, #13b0f5 100%);
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		&::before {
			animation: gradient 1s ease;
			animation-fill-mode: forwards;
		}
	}
`
export const S = {
	NavLink,
	ListItem,
	Menu,
}
