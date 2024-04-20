import styled from 'styled-components'
import proj1 from '../../../assets/images/proj1.webp'
import proj2 from '../../../assets/images/proj2.webp'
import proj3 from '../../../assets/images/proj3.webp'
import proj4 from '../../../assets/images/proj4.webp'
import proj5 from '../../../assets/images/proj5.webp'
import proj6 from '../../../assets/images/proj6.webp'

import { Fade } from 'react-awesome-reveal'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { SubsectionTitle } from '../../../components/SubsectionTitle'
import { Project } from './Project/Project'
const projectData = [
	{
		src: proj1,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		subtext: 'Tech stack : HTML , JavaScript, SASS, React',
	},
	{
		src: proj2,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		subtext: 'Tech stack : HTML , JavaScript, SASS, React',
	},
	{
		src: proj3,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		subtext: 'Tech stack : HTML , JavaScript, SASS, React',
	},
	{
		src: proj4,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		subtext: 'Tech stack : HTML , JavaScript, SASS, React',
	},
	{
		src: proj5,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		subtext: 'Tech stack : HTML , JavaScript, SASS, React',
	},
	{
		src: proj6,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		subtext: 'Tech stack : HTML , JavaScript, SASS, React',
	},
]

export const Projects: React.FC = () => {
	return (
		<StyledProjects id={'projects'}>
			<Container>
				<SectionTitle>Projects</SectionTitle>
				<SubsectionTitle>Things I’ve built so far</SubsectionTitle>
				<FlexWrapper wrap='wrap' justify='center' gap='40px'>
					<Fade>
						{projectData.map(
							(
								p: {
									src: string
									title: string
									text: string
									subtext: string
								},
								index: number
							) => {
								return (
									<Project
										key={index}
										src={p.src}
										title={p.title}
										text={p.text}
										subtext={p.subtext}
									/>
								)
							}
						)}
					</Fade>
				</FlexWrapper>
			</Container>
		</StyledProjects>
	)
}

const StyledProjects = styled.section`
	background-color: ${props => props.theme.colors.primaryBg};
`
