import { useParams } from 'react-router-dom'
import {
	useGetCaseById,
	useGetCheckCase,
	usePostCaseOpen
} from '../api/hooks/caseHooks'
import { Button } from '../components/Button'
import { Drawer } from '../components/Drawer'
import { SkinItem } from '../components/SkinItem'
import { TeamIcon } from '../icons/TeamIcon'
import { TetherIcon } from '../icons/TetherIcon'
import { CoinIcon } from '../icons/CoinIcon'
import { ModalOpenCase } from '../components/ModalOpenCase'
import { useEffect, useState } from 'react'

function formatTime(durationInSeconds: number): string {
	const secondsInMinute = 60
	const secondsInHour = secondsInMinute * 60
	const secondsInDay = secondsInHour * 24

	const hours = Math.floor((durationInSeconds % secondsInDay) / secondsInHour)
	const minutes = Math.floor(
		(durationInSeconds % secondsInHour) / secondsInMinute
	)
	const seconds = durationInSeconds % secondsInMinute

	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export const CaseIdPage = () => {
	const { id } = useParams()
	const caseId = Number(id)
	const { data } = useGetCaseById(caseId)
	const { data: secondsData, isPending } = useGetCheckCase({ case_id: caseId })
	const [isOpen, setIsOpen] = useState(false)
	const [remainingSeconds, setRemainingSeconds] = useState<number>(0)

	const {
		data: mutateData,
		mutate,
		isSuccess
	} = usePostCaseOpen({ id: caseId })

	const handleOpenCase = () => {
		mutate()
	}

	useEffect(() => {
		// Обновляем оставшиеся секунды, если они пришли с бэка
		if (secondsData?.seconds) {
			setRemainingSeconds(secondsData.seconds)
		}
	}, [secondsData])

	useEffect(() => {
		// Если есть оставшиеся секунды, запускаем таймер
		let timer: NodeJS.Timeout | null = null
		if (remainingSeconds > 0) {
			timer = setInterval(() => {
				setRemainingSeconds(prevSeconds => prevSeconds - 1)
			}, 1000)
		}

		// Очищаем таймер при размонтировании компонента
		return () => {
			if (timer) {
				clearInterval(timer)
			}
		}
	}, [remainingSeconds])

	useEffect(() => {
		if (isSuccess) {
			setIsOpen(true)
		}
	}, [isSuccess])

	return (
		<div>
			{data && mutateData?.id && (
				<ModalOpenCase
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					skins={data.skins}
					skinId={mutateData?.id}
					openCase={() => handleOpenCase()}
					seconds={remainingSeconds}
				/>
			)}

			<Drawer
				leftSideContent={
					<div className='text-primary text-[20px] font-semibold'>
						{data?.name}
					</div>
				}>
				<div className='w-full mt-[30px] aspect-square flex items-center justify-center px-[20px] py-[40px] bg-[rgba(0,0,0,0.5)] rounded-[18px] relative shadow-[3px_3px_27.6px_0px_rgba(0,0,0,0.8)_inset,73px_49px_25px_0px_rgba(0,0,0,0)]'>
					<img src='/case.png' className='w-full' alt='case' />
					<div className='absolute top-1/2 left-1/2 -translate-1/2' />
					<div className='absolute bottom-5 left-5 shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.5)_inset,0px_2px_4px_0px_rgba(0,0,0,0.5)_inset] flex items-center gap-[3px] px-[10px] rounded-[50px]'>
						{data?.type_price === 'coin' && <CoinIcon />}
						{data?.type_price === 'usdt' && <TetherIcon />}
						{data?.type_price === 'friend' && <TeamIcon />}
						{data?.price}
					</div>
				</div>
				<div className='mt-3'>
					<Button
						onClick={() => handleOpenCase()}
						disabled={isPending || remainingSeconds !== 0}
						isOrange={!isPending && remainingSeconds === 0}>
						{!isPending && remainingSeconds === 0
							? 'Открыть'
							: formatTime(remainingSeconds)}
					</Button>
				</div>
				<div className='text-primary text-center text-[32px] font-semibold mt-[32px]'>
					Содержимое
				</div>
				<div className='mt-[14px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]'>
					{data?.skins.map(({ skin }) => (
						<SkinItem
							key={skin.id}
							currency='tether'
							value={skin.price}
							name={skin.name}
							rarity={skin.rarity}
							imgUrl={skin.image_url}
						/>
					))}
				</div>
			</Drawer>
		</div>
	)
}
