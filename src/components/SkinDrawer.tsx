import { useEffect } from 'react'
import { useOutputSkin, useSellSkin } from '../api/hooks/userHooks'
import { TetherIcon } from '../icons/TetherIcon'
import { getColorRarity } from '../utils/getColorRarity'
import { getQuality } from '../utils/getQuality'
import { Button } from './Button'
import { DrawerComponent } from './DrawerComponent'

interface SkinDrawerProps {
	selectedSkin: ISkins | null
	onClose: () => void
}

export const SkinDrawer = ({ selectedSkin, onClose }: SkinDrawerProps) => {
	const {
		mutate: outputSkins,
		isPending: isOutputSkinPending,
		data: outputSkinsData
	} = useOutputSkin()

	const {
		mutate: sellSkin,
		isPending: isSellSkinPending,
		isSuccess: isSellSkinSuccess
	} = useSellSkin()

	const handleOutputSkin = () => {
		if (!selectedSkin) {
			return
		}
		outputSkins({ id: selectedSkin.id })
	}

	useEffect(() => {
		if (outputSkinsData?.status === 'success') {
			onClose()
		}
	}, [onClose, outputSkinsData])

	useEffect(() => {
		if (isSellSkinSuccess) {
			onClose()
		}
	}, [isSellSkinSuccess, onClose, selectedSkin])

	const handleSellSkin = () => {
		if (!selectedSkin) {
			return
		}
		sellSkin({ id: selectedSkin.id })
	}

	return (
		<DrawerComponent
			isOpen={!!selectedSkin}
			onClose={() => onClose()}
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
					<Button
						disabled={isSellSkinPending && isOutputSkinPending}
						isOrange={!isSellSkinPending && !isOutputSkinPending}
						onClick={handleSellSkin}>
						Продать
					</Button>
					<Button
						disabled={isSellSkinPending && isOutputSkinPending}
						isOrange={!isSellSkinPending && !isOutputSkinPending}
						onClick={handleOutputSkin}>
						Вывести
					</Button>
				</div>
			</div>
		</DrawerComponent>
	)
}
