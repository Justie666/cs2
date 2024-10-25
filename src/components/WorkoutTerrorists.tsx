import { useEffect, useState } from 'react'
import { usePathKill } from '../api/hooks/userHooks'

interface WorkoutTerrorist {
	src: string
	top: string
	left: string
	z: number
}

const workoutTerrorists: WorkoutTerrorist[] = [
	{ src: '/t dance.png', top: '14%', left: '1%', z: 10 },
	{ src: '/t knife.png', top: '30%', left: '45%', z: 20 },
	{ src: '/t radio.png', top: '35%', left: '10%', z: 20 },
	{ src: '/t trap.png', top: '10%', left: '30%', z: 10 }
]

interface IWorkoutTerroristsProps {
	handleDecreaseBullets: () => void
	onCoinsUpdate: (localCoins: number) => void
}

export const WorkoutTerrorists = ({
	handleDecreaseBullets,
	onCoinsUpdate
}: IWorkoutTerroristsProps) => {
	const [visibleTerrorists, setVisibleTerrorists] = useState<
		WorkoutTerrorist[]
	>([])
	const [hitPosition, setHitPosition] = useState<{
		x: number
		y: number
	} | null>(null)
	const { mutate } = usePathKill()

	const handleHit = (x: number, y: number, index: number) => {
		onCoinsUpdate(1) // Добавляем монеты
		mutate() // Вызываем мутацию
		handleDecreaseBullets()

		// Удаляем террориста из видимых
		setVisibleTerrorists(prev => prev.filter((_, i) => i !== index))

		// Позиция попадания
		setHitPosition({ x, y })
		setTimeout(() => setHitPosition(null), 300) // Скрываем после 300 мс
	}

	useEffect(() => {
		const interval = setInterval(() => {
			const terroristsNotOnScreen = workoutTerrorists.filter(
				terrorist => !visibleTerrorists.some(vt => vt.src === terrorist.src)
			)

			if (terroristsNotOnScreen.length > 0) {
				const randomIndex = Math.floor(
					Math.random() * terroristsNotOnScreen.length
				)
				const newTerrorist = terroristsNotOnScreen[randomIndex]

				setVisibleTerrorists(prev => [...prev, newTerrorist])

				setTimeout(() => {
					setVisibleTerrorists(prev =>
						prev.filter(terrorist => terrorist.src !== newTerrorist.src)
					)
				}, 4000)
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [visibleTerrorists]) // добавил зависимость workoutTerrorists

	return (
		<div>
			<img
				src={'/background.png'}
				alt={''}
				className='w-full h-[72%] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
                border-primary border-4 rounded-[77px] z-0'
				onClick={handleDecreaseBullets}
			/>
			{visibleTerrorists.map((terrorist, index) => (
				<img
					key={index} // Используйте индекс как ключ, рассмотрите возможность использования уникального ID в реальном случае
					src={terrorist.src}
					alt=''
					style={{
						top: terrorist.top,
						left: terrorist.left,
						zIndex: terrorist.z
					}}
					className='absolute w-[240px] h-[260px] transition-opacity duration-500 ease-in-out opacity-100'
					onClick={e => handleHit(e.clientX, e.clientY, index)}
				/>
			))}
			{hitPosition && (
				<img
					src='/workout.png'
					alt='hit'
					style={{
						top: hitPosition.y,
						left: hitPosition.x
					}}
					className='size-[80px] z-50 absolute transform -translate-x-1/2 -translate-y-1/2'
				/>
			)}
		</div>
	)
}
