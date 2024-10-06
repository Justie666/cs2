import { Drawer } from '../components/Drawer'
import { PlusIcon } from '../icons/PlusIcon'

export const ReferralsPage = () => {
	return (
		<div>
			<Drawer
				leftSideContent={
					<div className='text-primary text-[32px] font-semibold'>Рефералы</div>
				}>
				<div className='mt-[30px] font-medium text-[15px] p-[13px] rounded-[20px] bg-[#4C4C4C]'>
					За приглашенного друга можно получить 1 обойму, если друг заработал 10
					монеток. <br />
					<span className='text-primary'>
						{' '}
						За каждого друга можно получить 1% с его пополнений usdt себе на
						баланс
					</span>
				</div>
				<div className='mt-[40px] grid grid-cols-3 gap-[20px]'>
					{/* TODO сделать логику для добавления реферала */}
					<div className='rounded-full border-[3px] border-primary aspect-square bg-[rgba(76,76,76,0.4)] flex items-center justify-center'>
						<PlusIcon />
					</div>
					<div className='rounded-full border-[3px] border-primary aspect-square'>
						<img src='https://www.svgrepo.com/show/81103/avatar.svg' alt='' />
					</div>
					<div className='rounded-full border-[3px] border-primary aspect-square'>
						<img src='https://www.svgrepo.com/show/81103/avatar.svg' alt='' />
					</div>
					<div className='rounded-full border-[3px] border-primary aspect-square'>
						<img src='https://www.svgrepo.com/show/81103/avatar.svg' alt='' />
					</div>
					<div className='rounded-full border-[3px] border-primary aspect-square'>
						<img src='https://www.svgrepo.com/show/81103/avatar.svg' alt='' />
					</div>
				</div>
			</Drawer>
		</div>
	)
}
