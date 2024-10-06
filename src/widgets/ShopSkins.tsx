import { useState } from 'react'
import { Button } from '../components/Button'

export const ShopSkins = () => {
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
		</div>
	)
}
