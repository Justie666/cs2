import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { useGetCases } from '../api/hooks/caseHooks'
import { CaseItem } from '../components/CaseItem'
import { useIntersectionObserver } from '@siberiacancode/reactuse'

export const ShopCases = () => {
	const [typeCases, setTypeCases] = useState<CasesType>('free')
	const limit = 25
	const [offset, setOffset] = useState(0)
	const [cases, setCases] = useState<Case[]>([])
	const { data } = useGetCases({
		limit: limit,
		offset: offset,
		sorting: typeCases
	})

	// Обработчик смены типа кейсов
	const handleSelectTypeCases = (type: CasesType) => {
		setTypeCases(type)
		setOffset(0)
		setCases([])
	}

	useEffect(() => {
		if (data && data.length > 0) {
			setCases(prev => [...prev, ...data])
		}
	}, [data])

	const { ref: observerRef } = useIntersectionObserver<HTMLDivElement>({
		threshold: 1,
		onChange: entry => {
			if (entry.isIntersecting) {
				setOffset(prev => prev + limit)
			}
		}
	})

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
			<div>
				<div className='mt-[30px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]'>
					{cases && cases.map(item => <CaseItem key={item.id} {...item} />)}
					{cases.length > 0 && data?.length !== 0 && <div ref={observerRef} />}
				</div>
			</div>
		</div>
	)
}
