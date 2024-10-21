import { useEffect, useState } from 'react'
import { usePathKill } from '../api/hooks/userHooks'

interface WorkoutTerrorist {
	src: string
	top: string
	left: string
	hp: number
}

const workoutTerrorists: WorkoutTerrorist[] = [
	{ src: '/t dance.png', top: '14%', left: '1%', hp: 100 },
	{ src: '/t knife.png', top: '30%', left: '45%', hp: 100 },
	{ src: '/t radio.png', top: '35%', left: '10%', hp: 100 },
	{ src: '/t trap.png', top: '10%', left: '30%', hp: 100 }
]

interface IWorkoutTerroristsProps {
	handleDecreaseBullets: () => void
	onCoinsUpdate: (localCoins: number) => void
}

export const WorkoutTerrorists = ({
	handleDecreaseBullets,
	onCoinsUpdate
}: IWorkoutTerroristsProps) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const [terrorists, setTerrorists] =
		useState<WorkoutTerrorist[]>(workoutTerrorists)
	const [hitPosition, setHitPosition] = useState<{
		x: number
		y: number
	} | null>(null)
	const { mutate } = usePathKill()

	const handleHit = (
		hitType: 'head' | 'body' | 'limbs',
		x: number,
		y: number
	) => {
		{
			/* TODO: фикс бага с двойным вызовом функции */
		}
		const damage = hitType === 'head' ? 100 : hitType === 'body' ? 25 : 10

		setTerrorists(prevTerrorists => {
			const newTerrorists = [...prevTerrorists]
			const currentTerrorist = newTerrorists[currentIndex]
			currentTerrorist.hp -= damage

			if (currentTerrorist.hp <= 0) {
				onCoinsUpdate(1)
				mutate()
				setIsVisible(false)
				setHitPosition({ x, y })
				setTimeout(() => setHitPosition(null), 300)
				setCurrentIndex(prevIndex => (prevIndex + 1) % workoutTerrorists.length)
				currentTerrorist.hp = 100
			}

			return newTerrorists
		})

		handleDecreaseBullets()
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible(true)

			setTimeout(() => {
				setIsVisible(false)
				setCurrentIndex(prevIndex => (prevIndex + 1) % workoutTerrorists.length)
			}, 3000)
		}, 4000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			<img
				src={'/background.png'}
				alt={''}
				className='w-full h-[72%] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
                border-primary border-4 rounded-[77px] z-0'
				onClick={handleDecreaseBullets}
			/>
			{isVisible && (
				<img
					src={terrorists[currentIndex].src}
					alt=''
					style={{
						top: terrorists[currentIndex].top,
						left: terrorists[currentIndex].left
					}}
					className={`absolute w-[240px] h-[260px] transition-opacity duration-500 ease-in-out z-50 ${
						isVisible ? 'opacity-100' : 'opacity-0'
					}`}
					onClick={e => {
						const bounds = e.currentTarget.getBoundingClientRect()
						const clickY = e.clientY - bounds.top

						let hitType: 'head' | 'body' | 'limbs'

						if (clickY < bounds.height * 0.3) {
							hitType = 'head'
						} else if (clickY < bounds.height * 0.5) {
							hitType = 'body'
						} else {
							hitType = 'limbs'
						}

						handleHit(hitType, e.clientX, e.clientY)
					}}
				/>
			)}
			{hitPosition && (
				<img
					src='/workout.png'
					alt='hit'
					style={{
						top: hitPosition.y,
						left: hitPosition.x
					}}
					className={`size-[80px] z-50 absolute transform -translate-x-1/2 -translate-y-1/2`}
				/>
			)}
		</div>
	)
}
