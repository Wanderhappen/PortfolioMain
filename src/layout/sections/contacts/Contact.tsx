import { Container } from '../../../components/Container'
import { Gradient } from '../../../components/gradient/Gradient'
import { S } from './Contact_Styles'

export const Contact: React.FC = () => {
	return (
		<S.Contact id={'contact'}>
			<Container>
				<S.Title>For any questions please mail me:</S.Title>
				<Gradient
					direction='90deg'
					firstColor='#13b0f5 -40%'
					secondColor='#e70faa 120%'
				>
					<S.Mail href='mailto:info@example.com'>hi@pavanmg.in</S.Mail>
				</Gradient>
			</Container>
		</S.Contact>
	)
}
