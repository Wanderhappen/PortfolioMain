import styled from 'styled-components'
import { theme } from '../../styles/Theme'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	&:first-child {
		border-bottom: 2px solid rgba(66, 68, 110, 0.3);
		padding-bottom: 42px;
		gap: 40px;
		align-items: flex-start;
		@media ${theme.media.tablet} {
			ul {
				flex-direction: column;
			}
		}
	}

	& + & {
		padding: 46px 0 60px;
		align-items: center;
	}
`
const Footer = styled.footer`
	background-color: ${props => props.theme.colors.primaryBg};
	padding-top: 106px;
`

const Communication = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 30px;
	align-items: center;

	@media ${theme.media.tablet} {
		flex-direction: column;
	}
`
const Link = styled.a`
	font-family: DM Sans, sans-serif;
	font-size: 18px;
	line-height: 26px;
	color: ${props => props.theme.colors.secondaryFont};
`

const Attribution = styled.small`
	display: flex;
	flex-wrap: wrap;
	gap: 0.2em;
	font-size: 18px;
	line-height: 26px;
	color: ${props => props.theme.colors.secondaryFont};
`

export const S = {
	Wrapper,
	Footer,
	Communication,
	Link,
	Attribution,
}
