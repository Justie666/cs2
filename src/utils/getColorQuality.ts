export const getColorQuality = (value: QualitySkin) => {
	switch (value) {
		case 'BS':
			return 'aqua'
		case 'WW':
			return 'blue'
		case 'FT':
			return 'purple'
		case 'MW':
			return 'pink'
		case 'FN':
			return 'red'
		default:
			return ''
	}
}
