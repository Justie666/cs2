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

import { toast } from 'sonner'
import { SkinDrawer } from '../components/SkinDrawer'

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
		const isValidTradeURL =
			value.includes('https://steamcommunity.com/tradeoffer') &&
			value.includes('?partner=') &&
			value.includes('&token=')

		if (!isValidTradeURL) {
			toast.error(
				"Некорректный трейд URL. Убедитесь, что ссылка содержит 'https://steamcommunity.com/tradeoffer', '?partner=' и '&token='."
			)
			return
		}

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
					{data?.skins?.map((item, index) => (
						<div
							key={`${item.id}-${index}`}
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
			{selectedSkin && (
				<SkinDrawer
					onClose={() => setSelectedSkin(null)}
					selectedSkin={selectedSkin}
				/>
			)}
		</>
	)
}
