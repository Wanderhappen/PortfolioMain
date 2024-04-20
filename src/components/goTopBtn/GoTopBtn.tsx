import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'

export const GoTopBtn = () => {
	const [showBtn, setshowBtn] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setshowBtn(true)
			} else {
				setshowBtn(false)
			}
		})
	}, [])
	return (
		<>
			{showBtn && (
				<StyledGoTopBtn
					onClick={() => {
						scroll.scrollToTop()
					}}
				>
					<Icon iconId={'arrow'} width='16' height='15'></Icon>
				</StyledGoTopBtn>
			)}
		</>
	)
}

const StyledGoTopBtn = styled.button`
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #0000004d;
	position: fixed;
	bottom: 30px;
	right: 30px;
	cursor: pointer;
`
