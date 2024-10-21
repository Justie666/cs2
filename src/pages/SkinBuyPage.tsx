import { useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Drawer } from '../components/Drawer'
import { TeamIcon } from '../icons/TeamIcon'
import { useGetSkinById, usePostBuySkin } from '../api/hooks/shopHooks'
import { getQuality } from '../utils/getQuality'

export const SkinBuyPage = () => {
	const { id } = useParams()

	const { data } = useGetSkinById({ skin_id: Number(id) })

	const { mutate, isPending } = usePostBuySkin()

	const handleBuy = () => {
		mutate({ id: Number(id) })
	}

	return (
		<div>
			<Drawer
				leftSideContent={
					<div className='text-primary text-[20px] font-semibold'>
						{data?.name}
					</div>
				}>
				<div className='flex flex-col min-h-[80vh]'>
					<div className='flex-grow'>
						<div className='w-full mt-[30px] aspect-square flex items-center justify-center px-[20px] py-[40px] bg-[rgba(0,0,0,0.5)] rounded-[18px] relative shadow-[3px_3px_27.6px_0px_rgba(0,0,0,0.8)_inset,73px_49px_25px_0px_rgba(0,0,0,0)]'>
							<img src={data?.image_url} className='w-full' alt='case' />
							<div className='absolute top-1/2 left-1/2 -translate-1/2' />
							<div className='absolute bottom-5 left-5 shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.5)_inset,0px_2px_4px_0px_rgba(0,0,0,0.5)_inset] flex items-center gap-[3px] px-[10px] rounded-[50px]'>
								<TeamIcon /> {data?.price}
							</div>
						</div>
						<div className='bg-[#4c4c4c] rounded-[6px] py-[10px] px-[13px] text-[15px] font-medium mt-[34px] flex justify-between'>
							{data?.quality && getQuality(data?.quality)}
						</div>
					</div>
					<div className='flex gap-[20px]'>
						<Button
							onClick={handleBuy}
							isOrange={!isPending}
							disabled={isPending}>
							Купить
						</Button>
					</div>
				</div>
			</Drawer>
		</div>
	)
}
