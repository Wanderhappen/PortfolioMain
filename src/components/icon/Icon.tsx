import iconsSprite from '../../assets/images/sprite.svg'
type IconPropsType = {
	iconId: string
	width?: string
	height?: string
	viewBoxCustom?: string
	x?: string
	y?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
	return (
		<svg
			width={props.width || '97'}
			height={props.height || '59'}
			viewBox={`${props.x || '0'} ${props.y || '0'} ${props.width || '97'} ${
				props.width || '59'
			}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
		</svg>
	)
}
