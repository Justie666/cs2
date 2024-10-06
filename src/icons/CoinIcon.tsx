export const CoinIcon = () => {
	return (
		<svg
			width='32'
			height='33'
			viewBox='0 0 32 33'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<ellipse
				cx='16'
				cy='16.5001'
				rx='13'
				ry='13'
				fill='url(#paint0_linear_204_5309)'
			/>
			<g filter='url(#filter0_i_204_5309)'>
				<circle cx='16' cy='16.5' r='11' fill='url(#paint1_linear_204_5309)' />
			</g>
			<defs>
				<filter
					id='filter0_i_204_5309'
					x='5'
					y='5.5'
					width='22'
					height='23'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='BackgroundImageFix'
						result='shape'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='1' />
					<feGaussianBlur stdDeviation='2' />
					<feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.471458 0 0 0 0 0.153224 0 0 0 0 0.153224 0 0 0 1 0'
					/>
					<feBlend
						mode='normal'
						in2='shape'
						result='effect1_innerShadow_204_5309'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_204_5309'
					x1='16'
					y1='3.50006'
					x2='16'
					y2='29.5001'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.4342' stopColor='#FFD300' />
					<stop offset='0.9492' stopColor='white' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_204_5309'
					x1='25'
					y1='8'
					x2='9.5'
					y2='26'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.185' stopColor='#FFC700' />
					<stop offset='0.305' stopColor='white' />
					<stop offset='0.435' stopColor='white' />
					<stop offset='0.505' stopColor='#FFE589' />
					<stop offset='0.565' stopColor='white' />
					<stop offset='0.775' stopColor='#FFC700' />
					<stop offset='1' stopColor='#997700' />
				</linearGradient>
			</defs>
		</svg>
	)
}
