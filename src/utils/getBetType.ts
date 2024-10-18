export const getBetType = (value: BetType) => {
	switch (value) {
		case 'dry_bill':
			return 'Сухой счёт'
		case 'knife':
			return 'Нож'
		case 'winner_first_card':
			return 'Победить 1 карты'
		case 'winner_second_card':
			return 'Победить 2 карты'
		default:
			return 'Победа'
	}
}
