import { useState } from 'react'
import { Button } from '../components/Button'
import { SkinItem } from '../components/SkinItem'

export const ShopCases = () => {
	const [typeCases, setTypeCases] = useState<CasesType>('free')

	const handleSelectTypeCases = (type: CasesType) => {
		setTypeCases(type)
	}
	return (
		<div className='mt-[10px]'>
			<div className='flex items-center gap-[20px]'>
				<Button
					onClick={() => handleSelectTypeCases('free')}
					isBlue={typeCases === 'free'}>
					Бесплатные
				</Button>
				<Button
					onClick={() => handleSelectTypeCases('paid')}
					isBlue={typeCases === 'paid'}>
					Платные
				</Button>
			</div>
			<div className='mt-[30px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]'>
				<SkinItem
					href='/case/1'
					value='111'
					imgUrl='/case.png'
					currency='coin'
				/>
				<SkinItem
					href='/case/1'
					value='111'
					imgUrl='/case.png'
					currency='tether'
				/>
				<SkinItem
					href='/case/1'
					value='111'
					imgUrl='/case.png'
					currency='referrals'
				/>
				<SkinItem
					href='/case/1'
					value='111'
					imgUrl='/case.png'
					currency='coin'
				/>
				<SkinItem
					href='/case/1'
					value='111'
					imgUrl='/case.png'
					currency='coin'
				/>
				<SkinItem
					href='/case/1'
					value='111'
					imgUrl='/case.png'
					currency='coin'
				/>
			</div>
		</div>
	)
}
