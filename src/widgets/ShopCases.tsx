import { SkinItem } from '../components/SkinItem'

export const ShopCases = () => {
	return (
		<div>
			<div>
				<div className='mt-[30px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]'>
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
					<SkinItem value='111' imgUrl='/skin.png' currency='tether' />
					<SkinItem value='111' imgUrl='/skin.png' currency='referrals' />
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
					<SkinItem value='111' imgUrl='/skin.png' currency='coin' />
				</div>
			</div>
		</div>
	)
}
