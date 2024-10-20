export const getColorRarity = (value: Rarity) => {
	switch (value) {
		case 'CG':
			return 'aqua'
		case 'IQ':
			return 'blue'
		case 'AQ':
			return 'blue'
		case 'PR':
			return 'purple'
		case 'CL':
			return 'pink'
		default:
			return 'red'
	}
}
