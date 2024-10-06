import { Drawer } from '../components/Drawer'
import { InfoBlock } from '../components/InfoBlock'

export const StatsBetsPage = () => {
	return (
		<Drawer
			leftSideContent={
				<div className='text-primary text-[32px] font-semibold'>
					Статистика ставок
				</div>
			}>
			<div className='flex flex-col gap-[35px] mt-[50px]'>
				<InfoBlock title='Ставок всего' value='xxx' />
				<InfoBlock title='Ставок сейчас' value='xxx' />
				<div className='text-primary font-bold'>Процент побед xx%</div>
				<InfoBlock title='Количество побед' value='xxx' />
			</div>
		</Drawer>
	)
}
