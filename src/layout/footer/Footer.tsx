import { Container } from '../../components/Container'
import { Gradient } from '../../components/gradient/Gradient'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { SocialList } from '../../components/socialList/SocialList'
import { S } from './Footer_Styles'

export const Footer: React.FC = () => {
	return (
		<S.Footer>
			<Container>
				<S.Wrapper>
					<Menu fontSize='18px' fontWeight='400'></Menu>
					<S.Attribution>
						Designed and built by
						<Gradient
							direction='90deg'
							firstColor='#13B0F5 -170%'
							secondColor='#E70FAA 240%'
						>
							Pavan MG
						</Gradient>
						with
						<Gradient
							direction='90deg'
							firstColor='#13B0F5 -240%'
							secondColor='#E70FAA 60%'
						>
							Love
						</Gradient>
						&
						<Gradient
							direction='to bottom left'
							firstColor='#13B0F5 -240%'
							secondColor='#E70FAA 60%'
						>
							Coffee
						</Gradient>
					</S.Attribution>
				</S.Wrapper>
				<S.Wrapper>
					<Logo />
					<S.Communication>
						<S.Link href='tel:+911234509876'>+91 12345 09876</S.Link>
						<S.Link href='mailto:info@example.com'>info@example.com</S.Link>
						<SocialList />
					</S.Communication>
				</S.Wrapper>
			</Container>
		</S.Footer>
	)
}
