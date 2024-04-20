import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { SubsectionTitle } from '../../../components/SubsectionTitle'
import { Icon } from '../../../components/icon/Icon'
import { theme } from '../../../styles/Theme'

const iconData = [
	{ iconId: 'html', width: '120', height: '120' },
	{ iconId: 'css', width: '120', height: '120' },
	{ iconId: 'js', width: '120', height: '120' },
	{ iconId: 'react', width: '120', height: '120', x: '-5', y: '-9' },
	{ iconId: 'redux', width: '120', height: '120', x: '-8', y: '-9' },
	{ iconId: 'boot', width: '120', height: '120', x: '-16', y: '-16' },
	{ iconId: 'tailwind', width: '120', height: '120', x: '5', y: '7' },
	{ iconId: 'sass', width: '120', height: '120', x: '-2', y: '-14' },
	{ iconId: 'Git', width: '120', height: '120', x: '-7', y: '-8' },
	{ iconId: 'jenkins', width: '120', height: '120', x: '1' },
	{ iconId: 'vsc', width: '120', height: '120', x: '-2', y: '-5' },
	{ iconId: 'github', width: '120', height: '120', x: '-16', y: '-16' },
]

export const Technologies: React.FC = () => {
	return (
		<StyledStack id='technologies'>
			<Container>
				<SectionTitle>My Tech Stack</SectionTitle>
				<SubsectionTitle>
					Technologies I’ve been working with recently
				</SubsectionTitle>
				<GridWrapper>
					<Fade cascade damping={0.1}>
						{iconData.map(
							(t: {
								iconId: string
								width: string
								height: string
								x?: string
								y?: string
							}) => {
								return (
									<Icon
										iconId={t.iconId}
										width={t.width}
										height={t.height}
										x={t.x}
										y={t.y}
									/>
								)
							}
						)}
					</Fade>
				</GridWrapper>
			</Container>
		</StyledStack>
	)
}

const StyledStack = styled.section`
	background-color: ${props => props.theme.colors.primaryBg};
`
const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	gap: 80px;
	justify-items: center;
	align-items: center;
	color: ${props => props.theme.colors.subFont};

	@media ${theme.media.mobile} {
		gap: 50px;
	}
`
