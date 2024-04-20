import styled from 'styled-components'
import { Icon } from '../icon/Icon'

export const SocialList: React.FC = () => {
	return (
		<SocialIconsList>
			<li>
				<a href=' '>
					<Icon iconId={'gitSocial'} width='30px' height='30px' />
				</a>
			</li>
			<li>
				<a href=' '>
					<Icon iconId={'twitter'} width='30px' height='30px' />
				</a>
			</li>
			<li>
				<a href=' '>
					<Icon iconId={'linkedin'} width='30px' height='30px' />
				</a>
			</li>
		</SocialIconsList>
	)
}

const SocialIconsList = styled.ul`
	display: flex;
	gap: 20px;
	li {
		transition: transform 0.5s;
	}

	li:hover {
		transform: translateY(-4px);
	}
`
