import { useGetUserFull } from '../api/hooks/userHooks'
import { Drawer } from '../components/Drawer'
import { InfoBlock } from '../components/InfoBlock'

export const StatsPage = () => {
	const { data } = useGetUserFull()

	return (
		<div>
			<Drawer
				leftSideContent={
					<div className='text-primary text-[32px] font-semibold'>
						Статистика
					</div>
				}>
				<div className='flex flex-col gap-[35px] mt-[50px]'>
					<InfoBlock
						title='Ставок сделано'
						value={data?.statistics.total_bets + ''}
					/>
					<InfoBlock
						title='Кейсов открыто'
						value={data?.statistics.total_opened_cases + ''}
					/>
					<InfoBlock
						title='Скинов выбито'
						value={data?.statistics.total_skins + ''}
					/>
					<InfoBlock
						title='Друзей найдено'
						value={data?.statistics.total_referrals + ''}
					/>
				</div>
				<div className='mt-[50px] text-primary font-bold'>
					Мы вместе уже {data?.statistics.total_days_on_platform} дней
				</div>
			</Drawer>
		</div>
	)
}
