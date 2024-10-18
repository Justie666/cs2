import { useState } from 'react'
import { Balance } from '../components/Balance'
import { BetItem } from '../components/BetItem'
import { Button } from '../components/Button'
import { Drawer } from '../components/Drawer'
import { useGetUserFull } from '../api/hooks/userHooks'

export const MyBetsPage = () => {
	const [isActiveFilter, setIsActiveFilter] = useState(true)
	const { data } = useGetUserFull()

	const filteredBets = data?.bets?.filter(bet => bet.active === isActiveFilter)

	console.log(filteredBets)

	return (
		<Drawer leftSideContent={<Balance />}>
			<div className='flex gap-[18px] mt-[40px]'>
				<Button
					isOrange={isActiveFilter}
					onClick={() => setIsActiveFilter(true)}>
					Активные
				</Button>
				<Button
					isOrange={!isActiveFilter}
					onClick={() => setIsActiveFilter(false)}>
					Завершенные
				</Button>
			</div>
			<div className='flex flex-col gap-[50px] mt-[50px]'>
				{filteredBets?.map(bet => (
					<BetItem key={bet.id} bet={bet} />
				))}
			</div>
		</Drawer>
	)
}
