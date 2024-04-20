import { S } from './Menu_Styles'

export const items = [
	{
		title: 'Home',
		href: 'home',
	},
	{
		title: 'Tech Stack',
		href: 'technologies',
	},
	{
		title: 'Projects',
		href: 'projects',
	},
]

type MenuPropsType = {
	fontSize?: string
	fontWeight?: string
	direction?: string
	gap?: string
	closeMenu: () => void // Новый пропс для закрытия меню
}

export const Menu: React.FC<MenuPropsType> = props => {
	return (
		<S.Menu gap={props.gap} direction={props.direction}>
			<ul>
				{items.map((item: { href: string; title: string }, index: number) => (
					<S.ListItem key={index}>
						<S.NavLink
							activeClass='active'
							to={item.href}
							smooth={true}
							spy={true}
							offset={-1}
							fontSize={props.fontSize}
							fontWeight={props.fontWeight}
							onClick={() => {
								props.closeMenu()
							}}
						>
							{item.title}
						</S.NavLink>
					</S.ListItem>
				))}
			</ul>
		</S.Menu>
	)
}
