import { useEffect, useState } from 'react'
import { Drawer } from '../components/Drawer'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import {
	useGetTradeURL,
	useGetUserFull,
	useUpdateTradeURL
} from '../api/hooks/userHooks'
import { SkinItem } from '../components/SkinItem'
import { Balance } from '../components/Balance'
import { DrawerComponent } from '../components/DrawerComponent'
import { TetherIcon } from '../icons/TetherIcon'
import { getQuality } from '../utils/getQuality'
import { getColorRarity } from '../utils/getColorRarity'

export const MySkinsPage = () => {
	const [value, setValue] = useState('')
	const { data } = useGetUserFull()
	const { data: tradeURL } = useGetTradeURL()
	const { mutate } = useUpdateTradeURL()
	const [selectedSkin, setSelectedSkin] = useState<ISkins | null>()

	useEffect(() => {
		if (tradeURL?.trade_url) {
			setValue(tradeURL.trade_url)
		}
	}, [tradeURL])

	const handleUpdateTradeURL = () => {
		mutate({ trade_url: value })
	}

	return (
		<>
			<Drawer
				leftSideContent={
					<div>
						<Balance />
					</div>
				}>
				<div className='mt-[32px] text-primary text-center font-semibold text-[32px]'>
					Скины
				</div>
				<div className='mt-[16px]'>
					<Input
						value={value}
						onChange={e => setValue(e.target.value)}
						onBlur={handleUpdateTradeURL}
						placeholder='trade url'
					/>
				</div>
				<div className='flex flex-col mt-[16px]'>
					<Button isOrange>Вывод скинов</Button>
				</div>
				<div className='mt-[56px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]'>
					{data?.skins?.map(item => (
						<div
							key={item.id}
							className='cursor-pointer'
							onClick={() => setSelectedSkin(item)}>
							<SkinItem
								currency='tether'
								imgUrl={item.image_url}
								rarity={item.rarity}
								value={item.price}
								name={item.name}
							/>
						</div>
					))}
				</div>
			</Drawer>
			<DrawerComponent
				isOpen={!!selectedSkin}
				onClose={() => setSelectedSkin(null)}
				leftSideContent={
					<div className='text-primary text-[20px] font-semibold'>
						{selectedSkin?.name}
					</div>
				}>
				<div className='flex flex-col min-h-[80vh]'>
					<div className='flex-grow'>
						<div className='w-full mt-[30px] aspect-square flex items-center justify-center px-[20px] py-[40px] bg-[rgba(0,0,0,0.5)] rounded-[18px] relative shadow-[3px_3px_27.6px_0px_rgba(0,0,0,0.8)_inset,73px_49px_25px_0px_rgba(0,0,0,0)]'>
							<img
								src={selectedSkin?.image_url}
								className='w-full relative z-30'
								alt='case'
							/>
							<div className='absolute top-1/2 left-1/2 -translate-1/2' />
							<div className='absolute bottom-5 left-5 shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.5)_inset,0px_2px_4px_0px_rgba(0,0,0,0.5)_inset] flex items-center gap-[3px] px-[10px] rounded-[50px] z-50'>
								<TetherIcon /> {selectedSkin?.price}
							</div>
							{selectedSkin?.quality && (
								<div
									className='absolute z-10 size-[200px] rounded-full blur'
									style={{
										background: getColorRarity(selectedSkin?.rarity)
									}}
								/>
							)}
						</div>
						<div className='bg-[#4c4c4c] rounded-[6px] py-[10px] px-[13px] text-[15px] font-medium mt-[34px] flex justify-between gap-2'>
							{selectedSkin?.quality && (
								<div>{getQuality(selectedSkin?.quality)}</div>
							)}
						</div>
					</div>
					<div className='flex gap-[20px]'>
						<Button isOrange>Продать</Button>
						<Button isOrange>Вывести</Button>
					</div>
				</div>
			</DrawerComponent>
		</>
	)
}
