// DesktopMenu.tsx
import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Menu } from '../../../../components/menu/Menu'
import { SocialList } from '../../../../components/socialList/SocialList'
import { ThemeSwitcher } from './themeSwitcher/ThemeSwitcher'

type DesktopMenuProps = {
	toggleTheme: () => void
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ toggleTheme }) => {
	return (
		<StyledDesktopMenu>
			<FlexWrapper gap='50px' align='center'>
				<Menu gap='50px' />
				<SocialList />
				<ThemeSwitcher toggleTheme={toggleTheme} />
			</FlexWrapper>
		</StyledDesktopMenu>
	)
}

const StyledDesktopMenu = styled.div``
