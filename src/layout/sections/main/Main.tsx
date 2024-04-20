import Typewriter from 'typewriter-effect'
import photoMain from '../../../assets/images/photo.webp'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Gradient } from '../../../components/gradient/Gradient'
import { S } from './Main_Styles'

export const Main: React.FC = () => {
	return (
		<S.Main id={'home'}>
			<Container>
				<FlexWrapper wrap='wrap' justify='space-between' align='center'>
					<S.MainTitle>
						<span>Hi👋,</span>
						<span>My name is</span>
						<Gradient firstColor='#13B0F5' secondColor='#E70FAA'>
							Pavan MG
						</Gradient>
						<h1>
							<Typewriter
								options={{
									strings: ['I build things for web'],
									autoStart: true,
									loop: true,
								}}
							/>
						</h1>
						<h1>
							<p>I build things for web</p>
						</h1>
					</S.MainTitle>
					<S.ContainerImg>
						<S.Photo src={photoMain} alt='' />
					</S.ContainerImg>
				</FlexWrapper>
			</Container>
		</S.Main>
	)
}
