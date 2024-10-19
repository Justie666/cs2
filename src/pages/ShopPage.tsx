import { Button } from '../components/Button'
import { useState } from 'react'
import { ShopCases } from '../widgets/ShopCases'
import { ShopSkins } from '../widgets/ShopSkins'
import { ShopHeader } from '../widgets/ShopHeader'

export const ShopPage = () => {
	const [shopType, setShopType] = useState<ShopType>('skins')

	const handleSelectShopType = (type: ShopType) => {
		setShopType(type)
	}

	return (
		<div className='pt-[30px] px-[20px] pb-[115px]'>
			<ShopHeader />
			<div className='mt-[30px] flex items-center gap-[20px]'>
				<Button
					onClick={() => handleSelectShopType('skins')}
					isOrange={shopType === 'skins'}>
					Скины
				</Button>
				<Button
					onClick={() => handleSelectShopType('cases')}
					isOrange={shopType === 'cases'}>
					Кейсы
				</Button>
			</div>
			{shopType === 'skins' && <ShopCases />}
			{shopType === 'cases' && <ShopSkins />}
		</div>
	)
}
