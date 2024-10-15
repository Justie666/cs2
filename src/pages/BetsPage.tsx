import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { CoinIcon } from '../icons/CoinIcon'
import { CoinInfoIcon } from '../icons/CoinInfoIcon'
import { TetherIcon } from '../icons/TetherIcon'
import { useState } from 'react'
import { BetItem } from '../components/BetItem'

export const BetsPage = () => {
	const [filterBets, setFilterBets] = useState<BetTypeFilter>('current')

	const handleToggleFilter = (status: BetTypeFilter) => {
		setFilterBets(status)
	}

	return (
		<div className='py-[30px] px-[20px]'>
			<div className='flex items-center justify-center gap-[20px] text-[20px] font-medium'>
				<Link
					to={'/stats-bets'}
					className='shadow-[inset_0px_1px_2px_1px_#00000080] size-[44px] flex items-center justify-center bg-bgColor rounded-full'>
					<CoinInfoIcon />
				</Link>
				<div className='flex items-center gap-[6px]'>
					<CoinIcon /> xxx
				</div>
				<div className='flex items-center gap-[6px]'>
					<TetherIcon /> xxx
				</div>
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
			<div className='mt-[40px]'>
				<BetItem />
			</div>
		</div>
	)
}
