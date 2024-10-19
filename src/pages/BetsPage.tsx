import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { CoinInfoIcon } from '../icons/CoinInfoIcon'
import { useState } from 'react'
import { useGetBets } from '../api/hooks/betHooks'
import { BetItemGeneral } from '../components/BetItemGeneral'
import { Balance } from '../components/Balance'

export const BetsPage = () => {
	const [filterBets, setFilterBets] = useState<BetTypeFilter>('current')
	const { data } = useGetBets()

	const handleToggleFilter = (status: BetTypeFilter) => {
		setFilterBets(status)
	}

	const filteredBets = (data || []).filter(bet => {
		if (filterBets === 'current') {
			return bet.status
		}
		return !bet.status
	})

	return (
		<div className='pt-[30px] pb-[130px] px-[20px]'>
			<div className='flex items-center justify-center gap-[20px] text-[20px] font-medium'>
				<Link
					to={'/stats-bets'}
					className='shadow-[inset_0px_1px_2px_1px_#00000080] size-[44px] flex items-center justify-center bg-bgColor rounded-full'>
					<CoinInfoIcon />
				</Link>
				<Balance />
			</div>
			<div className='space-y-[6px] mt-[30px]'>
				<Button
					onClick={() => handleToggleFilter('history')}
					isOrange={filterBets === 'history'}>
					Прошедшие события
				</Button>
				<Button
					onClick={() => handleToggleFilter('current')}
					isOrange={filterBets === 'current'}>
					Текущие события
				</Button>
			</div>
			<div className='mt-[40px] flex flex-col gap-[50px]'>
				{filteredBets &&
					filteredBets.map(bet => <BetItemGeneral key={bet.id} bet={bet} />)}
			</div>
		</div>
	)
}
