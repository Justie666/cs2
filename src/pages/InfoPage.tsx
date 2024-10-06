import { Drawer } from '../components/Drawer'

export const InfoPage = () => {
	return (
		<div>
			<Drawer
				leftSideContent={
					<div className='text-primary text-[32px] font-semibold'>
						Информация
					</div>
				}>
				<div className='text-[20px] font-medium mt-[30px]'>
					Здесь может находиться информация по механикам и прочее
				</div>
			</Drawer>
		</div>
	)
}
