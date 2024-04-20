import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Logo } from '../../components/logo/Logo'
import { DesktopMenu } from './headerMenu/DesktopMenu/DesktopMenu'
import { MobileMenu } from './headerMenu/MobileMenu/MobileMenu'

type HeaderPropsType = {
	toggleTheme: () => void
}

export const Header: React.FC<HeaderPropsType> = ({ toggleTheme }) => {
	const [width, setWidth] = React.useState(window.innerWidth)
	const breakpoint = 950

	React.useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth))
	}, [])

	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<Logo active />
					{width < breakpoint ? (
						<MobileMenu />
					) : (
						<DesktopMenu toggleTheme={toggleTheme} />
					)}
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: ${props => props.theme.colors.header};
	padding: 14px 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999999;
`
