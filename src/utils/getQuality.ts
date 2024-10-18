export const getQuality = (value: QualitySkin) => {
	switch (value) {
		case 'BS':
			return 'Закалённый в боях'
		case 'WW':
			return 'Поношенное'
		case 'FT':
			return 'После полевых испытаний'
		case 'MW':
			return 'Немного поношенное'
		case 'FN':
			return 'Прямо с завода'
		default:
			return ''
	}
}
