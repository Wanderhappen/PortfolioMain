import styled from 'styled-components'

const Project = styled.div`
	background: ${props => props.theme.colors.ProjectBg};
	width: 100%;
	max-width: 330px;

	border-radius: 20px;
	overflow: hidden;
`

const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`

const Description = styled.div`
	padding: 27px 28px 25px;
`

const Title = styled.h3`
	color: ${props => props.theme.colors.subFont};
	font-size: 28px;
	font-weight: 500;
	line-height: 34px;
`

const Text = styled.p`
	color: ${props => props.theme.colors.subFont};
	font-size: 18px;
	font-weight: 300;
	line-height: 26px;
	margin: 17px 0 12px;
`

const SubText = styled.p`
	color: ${props => props.theme.colors.primaryFont};
	font-size: 14px;
	font-weight: 300;
	line-height: 26px;
	margin-bottom: 21px;
`

const Link = styled.a`
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 16px;
	line-height: 26px;
	color: ${props => props.theme.colors.subFont};
	text-decoration: underline;

	&:hover {
		background-image: linear-gradient(90deg, #13b0f5 10%, #e70faa 100%);
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;

		& svg {
			color: ${props => props.theme.colors.subFont};
		}
	}
`

export const S = {
	Link,
	SubText,
	Project,
	Image,
	Description,
	Title,
	Text,
}
