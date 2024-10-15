import { Button } from '../components/Button'
import { Drawer } from '../components/Drawer'
import { SkinItem } from '../components/SkinItem'
import { TeamIcon } from '../icons/TeamIcon'

export const CaseIdPage = () => {
	return (
		<div>
			<Drawer
				leftSideContent={
					<div className='text-primary text-[20px] font-semibold'>
						Бесплатный кейс 1
					</div>
				}>
				<div className='w-full mt-[30px] aspect-square flex items-center justify-center px-[20px] py-[40px] bg-[rgba(0,0,0,0.5)] rounded-[18px] relative shadow-[3px_3px_27.6px_0px_rgba(0,0,0,0.8)_inset,73px_49px_25px_0px_rgba(0,0,0,0)]'>
					<img src='/case.png' className='w-full' alt='case' />
					<div className='absolute top-1/2 left-1/2 -translate-1/2' />
					<div className='absolute bottom-5 left-5 shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.5)_inset,0px_2px_4px_0px_rgba(0,0,0,0.5)_inset] flex items-center gap-[3px] px-[10px] rounded-[50px]'>
						<TeamIcon /> 10
					</div>
				</div>
				<div className='mt-3'>
					<Button isOrange>Открыть</Button>
				</div>
				<div className='text-primary text-center text-[32px] font-semibold mt-[32px]'>
					Содержимое
				</div>
				<div className='mt-[14px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]'>
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
					<SkinItem value='111' imgUrl='/skin.png' currency='tether' />
					<SkinItem value='111' imgUrl='/skin.png' currency='referrals' />
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
					<SkinItem value='111' imgUrl='/skin.png' currency='tether' />
					<SkinItem value='111' imgUrl='/skin.png' currency='referrals' />
				</div>
			</Drawer>
		</div>
	)
}
