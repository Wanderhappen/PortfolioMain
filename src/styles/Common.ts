type fontPropsType = {
	family?: string
	weight?: number
	color?: string
	lineHeight?: number
	Fmin?: number
	Fmax?: number
}

export const font = ({
	family,
	weight,
	color,
	lineHeight,
	Fmin,
	Fmax,
}: fontPropsType) => `
	font-family: ${family || 'Poppins'} ;
	font-weight: ${weight || 400};
	color: ${color};
	line-height: ${1.2 || lineHeight + 'px'};
	font-size: calc( (min(1140px,100vw) - 360px)/(1140 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
	`
