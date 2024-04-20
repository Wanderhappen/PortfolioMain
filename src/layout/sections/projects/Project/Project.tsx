import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'
import { S } from './Project_Styles'

type SkillPropsType = {
	src: string
	title: string
	text: string
	subtext: string
}
export const Project: React.FC<SkillPropsType> = (props: SkillPropsType) => {
	return (
		<S.Project>
			<S.Image src={props.src}></S.Image>
			<S.Description>
				<S.Title>{props.title}</S.Title>
				<S.Text>{props.text}</S.Text>
				<S.SubText>{props.subtext}</S.SubText>
				<FlexWrapper gap='10px' justify='space-between'>
					<S.Link>
						<Icon iconId={'link'} width='20' height='20' />
						<span>Live Preview</span>
					</S.Link>
					<S.Link>
						<Icon iconId={'git'} width='30' height='20' />
						<span>Live code</span>
					</S.Link>
				</FlexWrapper>
			</S.Description>
		</S.Project>
	)
}
