import { toast } from 'sonner'
import { useGetUserFull } from '../api/hooks/userHooks'
import { Drawer } from '../components/Drawer'
import { PlusIcon } from '../icons/PlusIcon'

export const ReferralsPage = () => {
	const { data } = useGetUserFull()

	const handleCopy = () => {
		navigator.clipboard.writeText('https://betswap.io?referrer32133')
		toast.success('Ссылка скопирована')
	}

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
					<div
						onClick={() => handleCopy()}
						className='rounded-full border-[3px] border-primary aspect-square bg-[rgba(76,76,76,0.4)] flex items-center justify-center'>
						<PlusIcon />
					</div>
					{data?.referrals &&
						data?.referrals.map(item => (
							<div
								key={item.photo_url}
								className='rounded-full border-[3px] border-primary aspect-square'>
								<img
									className='rounded-full'
									src={item.photo_url ? item.photo_url : '/avatar.jpg'}
									alt='Referral'
								/>
							</div>
						))}
				</div>
			</Drawer>
		</div>
	)
}
