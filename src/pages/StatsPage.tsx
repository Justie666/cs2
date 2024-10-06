import { Drawer } from '../components/Drawer'
import { InfoBlock } from '../components/InfoBlock'

export const StatsPage = () => {
	return (
		<div>
			<Drawer
				leftSideContent={
					<div className='text-primary text-[32px] font-semibold'>
						Статистика
					</div>
				}>
				<div className='flex flex-col gap-[35px] mt-[50px]'>
					<InfoBlock title='Ставок сделано' value='xxx' />
					<InfoBlock title='Кейсов открыто' value='xxx' />
					<InfoBlock title='Скинов выбито' value='xxx' />
					<InfoBlock title='Друзей найдено' value='xxx' />
				</div>
				<div className='mt-[50px] text-primary font-bold'>
					Мы вместе уже xx дней
				</div>
			</Drawer>
		</div>
	)
}
