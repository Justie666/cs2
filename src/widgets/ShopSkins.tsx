import { useEffect, useRef, useState } from 'react'
import {
	useGetAllSkins,
	useGetGuns,
	useGetSkinsSearch
} from '../api/hooks/shopHooks'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import { SkinItem } from '../components/SkinItem'
import { SearchIcon } from '../icons/SearchIcon'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { SelectTreeGuns } from '../components/SelectTreeGuns'
import { useIntersectionObserver } from '@siberiacancode/reactuse'

const QUALITY: { value: string | null; title: string }[] = [
	{ value: null, title: 'Качество' },
	{ value: 'FN', title: 'Прямо с завода' },
	{ value: 'MW', title: 'Немного поношенное' },
	{ value: 'FT', title: 'После полевых испытаний' },
	{ value: 'WW', title: 'Поношенное' },
	{ value: 'BS', title: 'Закалённый в боях' }
]

const RARITY: { value: string | null; title: string }[] = [
	{ value: null, title: 'Редкость' },
	{ value: 'CO', title: 'Крайне редкое' },
	{ value: 'SE', title: 'Тайное' },
	{ value: 'CL', title: 'Засекреченное' },
	{ value: 'PR', title: 'Запрещенное' },
	{ value: 'AQ', title: 'Армейское' },
	{ value: 'IQ', title: 'Промышленное' },
	{ value: 'CG', title: 'Ширпотреб' }
]

export const ShopSkins = () => {
	const [selectedQuality, setSelectedQuality] = useState<string | null>(null)
	const [selectedRarity, setSelectedRarity] = useState<string | null>(null)
	const [selectedGun, setSelectedGun] = useState<number | null>(null)
	const [searchValue, setSearchValue] = useState<string>('')
	const [sortedValue, setSortedValue] = useState<Sorting>('popular')
	const ref = useRef<HTMLDivElement>(null)
	const { data: skinsSearch } = useGetSkinsSearch({
		name: searchValue
	})
	const limit = 25
	const [offset, setOffset] = useState(0)
	const [skins, setSkins] = useState<Skin[]>([]) // Store accumulated skins
	const { data } = useGetAllSkins({
		limit: limit,
		offset: offset,
		gun_id: selectedGun === 0 ? null : selectedGun,
		quality: selectedQuality as Quality | null,
		rarity: selectedRarity as Rarity | null,
		sorting: sortedValue,
		name: searchValue
	})

	useEffect(() => {
		setSkins([])
		setOffset(0)
	}, [selectedGun, selectedQuality, selectedRarity, sortedValue, searchValue])

	useEffect(() => {
		if (data) {
			setSkins(prevSkins => [...prevSkins, ...data])
		}
	}, [data])
	const { data: guns } = useGetGuns()

	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		if (skins && skins.length > 0) {
			setIsOpen(true)
		}
	}, [skins])
	useOutsideClick(ref, () => setIsOpen(false))

	// Добавляем элемент 'Оружие' к массиву guns
	const modifiedGuns = guns
		? [{ id: 0, name: 'Оружие', children: [] }, ...guns]
		: []

	const { ref: observerRef } = useIntersectionObserver<HTMLDivElement>({
		threshold: 1,
		onChange: entry => {
			if (entry.isIntersecting) {
				setOffset(prev => prev + limit)
				console.log('321')
			}
		}
	})

	return (
		<div>
			<div className='mt-[12px] relative'>
				<Input
					icon={<SearchIcon />}
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					placeholder='Поиск...'
				/>
				{isOpen &&
					skinsSearch &&
					skinsSearch.length > 0 &&
					searchValue.length > 0 && (
						<div
							ref={ref}
							className='absolute rounded-[27px] top-[60px] border border-primary text-[20px] font-medium px-[35px] py-[10px] text-[#ABABAB] shadow-[inset_3px_3px_27.6px_0px_rgba(0,0,0,0.8)] bg-[#2C2C2C] w-full z-40 max-h-[150px] overflow-auto'>
							{skinsSearch?.map(skin => (
								<div
									key={skin.id}
									className='cursor-pointer'
									onClick={() => {
										setSearchValue(skin.name)
									}}>
									{skin.name}
								</div>
							))}
						</div>
					)}
			</div>
			{guns && (
				<div className='mt-3'>
					<SelectTreeGuns
						options={modifiedGuns}
						selected={selectedGun}
						setSelected={setSelectedGun}
					/>
				</div>
			)}
			<div className='mt-2 grid grid-cols-2 gap-2 justify-between'>
				<div>
					<Select
						selected={selectedQuality}
						setSelected={setSelectedQuality}
						options={QUALITY}
					/>
				</div>
				<div>
					{' '}
					<Select
						selected={selectedRarity}
						setSelected={setSelectedRarity}
						options={RARITY}
					/>
				</div>
			</div>
			<div className='mt-3 flex gap-2'>
				<div
					className={`text-[15px] font-medium cursor-pointer ${
						sortedValue === 'popular' && 'text-primary'
					}`}
					onClick={() => setSortedValue('popular')}>
					По умолчанию
				</div>
				<div
					className={`text-[15px] font-medium cursor-pointer ${
						sortedValue === 'cheaper' && 'text-primary'
					}`}
					onClick={() => setSortedValue('cheaper')}>
					Дешевле
				</div>
				<div
					className={`text-[15px] font-medium cursor-pointer ${
						sortedValue === 'dearly' && 'text-primary'
					}`}
					onClick={() => setSortedValue('dearly')}>
					Дороже
				</div>
			</div>
			<div>
				<div className='mt-[30px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]'>
					{skins?.map(skin => (
						<SkinItem
							key={skin.id}
							name={skin.name}
							value={skin.price}
							imgUrl={skin.image_url}
							currency='tether'
							rarity={skin.rarity}
						/>
					))}
					{data && <div ref={observerRef} />}
				</div>
			</div>
		</div>
	)
}
