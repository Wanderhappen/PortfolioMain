import { useState } from 'react'
import { Menu } from '../../../../components/menu/Menu'
import { S } from './Mobile_Styles'

export const MobileMenu: React.FC = props => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const onBurgerBtnClick = () => {
		setMenuIsOpen(!menuIsOpen)
	}

	return (
		<S.MobileMenu>
			<S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
				<span></span>
			</S.BurgerButton>
			<S.MobileMenuPopup
				isOpen={menuIsOpen}
				onClick={() => {
					setMenuIsOpen(false)
				}}
			>
				<Menu direction='column' gap='80px' fontSize='25px' />
			</S.MobileMenuPopup>
		</S.MobileMenu>
	)
}
