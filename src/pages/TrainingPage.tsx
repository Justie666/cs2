import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { WorkoutTerrorists } from '../components/WorkoutTerrorists'
import { WorkoutBulletsContainer } from '../components/WorkoutBulletsContainer'
import { Balance } from '../components/Balance'
import { CircleWithBullets } from '../components/CircleWithBullets'

export const TrainingPage = () => {
	const [isOpenWorkout, setIsOpenWorkout] = useState<boolean>(false)
	const [isStartWorkout, setIsStartWorkout] = useState<boolean>(false)
	const [bullets, setBullets] = useState<number>(30)
	const [showCoinGain, setShowCoinGain] = useState(false)
	const navigate = useNavigate()

	const handleCoinsUpdate = () => {
		setShowCoinGain(true)
		setTimeout(() => setShowCoinGain(false), 1000)
	}

	const handleDecreaseBullets = () => {
		setBullets(prev => prev - 1)
	}

	useEffect(() => {
		const openWorkoutTimer = setTimeout(() => {
			setIsOpenWorkout(true)
		}, 500)

		const startWorkoutTimer = setTimeout(() => {
			setIsStartWorkout(true)
			setIsOpenWorkout(false)
		}, 1000)

		return () => {
			clearTimeout(openWorkoutTimer)
			clearTimeout(startWorkoutTimer)
		}
	}, [])

	const handleEnd = useCallback(() => {
		setTimeout(() => {
			setIsOpenWorkout(false)
		}, 1000)

		setTimeout(() => {
			setIsStartWorkout(false)
			setIsOpenWorkout(true)
		}, 500)

		setTimeout(() => {
			navigate('/')
		}, 1500)
	}, [navigate])

	useEffect(() => {
		if (bullets === 0) {
			handleEnd()
		}
	}, [bullets, handleEnd])

	return (
		<div className='relative container px-5 pt-4 flex flex-col min-h-screen z-10 overflow-hidden items-center'>
			<div className='w-11/12 h-[79px] flex items-center justify-center rounded-[27px] shadow-inset-custom z-20 bg-bgColor'>
				<div className='flex items-center justify-center gap-[30px] relative'>
					{showCoinGain && (
						<span className='text-red-500 animate-coin-gain absolute font-bold text-[20px] -left-7'>
							+1
						</span>
					)}
					<Balance />
				</div>
			</div>
			{!isStartWorkout &&
				(!isOpenWorkout ? (
					<div>
						<img
							src={'/Rectangle 133.png'}
							alt={''}
							className='w-full h-[50%] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-primary border-4 transition-all duration-300 ease-out scale-100 opacity-100'
						/>
						<img
							src={'/workout.png'}
							alt={''}
							className='w-[249px] h-[230px] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-out'
						/>
					</div>
				) : (
					<div className='w-full'>
						<img
							src={'/Training-is-all-move.png'}
							alt={''}
							className='w-full h-[72%] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out scale-100 opacity-100'
						/>
						<img
							src={'/workout.png'}
							alt={''}
							className='w-[249px] h-[230px] rounded-full absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-in'
						/>
					</div>
				))}

			{isStartWorkout && (
				<WorkoutTerrorists
					handleDecreaseBullets={handleDecreaseBullets}
					onCoinsUpdate={handleCoinsUpdate}
				/>
			)}

			<div className='flex items-center justify-between w-[81%] gap-[22px] absolute bottom-[140px] z-40'>
				<WorkoutBulletsContainer bullets={bullets} />
			</div>

			<div className='z-[100] absolute bottom-[20px] w-[250px]'>
				<Button isOrange onClick={handleEnd}>
					Завершить тренировку
				</Button>
			</div>

			<CircleWithBullets />
		</div>
	)
}
