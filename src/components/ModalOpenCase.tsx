import { useState, useEffect, useRef, useMemo } from 'react'
import { SkinItem } from './SkinItem'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { TetherIcon } from '../icons/TetherIcon'
import { getColorRarity } from '../utils/getColorRarity'
import { Button } from './Button'
import { shuffleArray } from '../utils/shuffleArray'

interface ModalOpenCaseProps {
	isOpen: boolean
	onClose: () => void
	skins: { id: number; chance: number; skin: Skin }[]
	skinId: number
	openCase: () => void
}

export const ModalOpenCase = ({
	isOpen,
	onClose,
	skins,
	skinId,
	openCase
}: ModalOpenCaseProps) => {
	const [isRolling, setIsRolling] = useState(false)
	const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null)
	const [offset, setOffset] = useState(0)
	const fixedIndex = 73

	const generalChance = skins.reduce((acc, cur) => acc + cur.chance, 0)

	const shuffledSkins = useMemo(() => {
		const skinsWithChance = skins.map(skin => {
			return { ...skin, chance: skin.chance / generalChance }
		})

		const arr = skinsWithChance.map(skin => {
			return {
				id: skin.id,
				count: Math.round(80 * skin.chance),
				skin: skin.skin
			}
		})

		const skinsRandom = arr.flatMap(skin => {
			return Array(skin.count).fill(skin.skin)
		}) as { id: number; chance: number; skin: Skin }[]

		const shuffled = shuffleArray(skinsRandom) as Skin[]
		shuffled[fixedIndex] = skins.find(skin => skin.id === skinId)?.skin as Skin

		return shuffled
	}, [skins, skinId, generalChance, fixedIndex])

	shuffledSkins[fixedIndex] = skins.find(skin => skin.id === skinId)
		?.skin as Skin

	const rollSpeed = Math.floor(Math.random() * (7270 - 7080 + 1)) + 7080

	useEffect(() => {
		let animationFrame: number
		if (isRolling) {
			const startTime = performance.now()
			const duration = 7500

			const animate = (time: number) => {
				const elapsed = time - startTime
				const easeOut = 1 - Math.pow(1 - elapsed / duration, 3)
				const newOffset = easeOut * rollSpeed

				setOffset(newOffset)

				if (elapsed < duration) {
					animationFrame = requestAnimationFrame(animate)
				} else {
					setOffset(newOffset)
					setIsRolling(false)
					selectFixedSkin()
				}
			}
			animationFrame = requestAnimationFrame(animate)
		}

		return () => cancelAnimationFrame(animationFrame)
	}, [isRolling])

	const selectFixedSkin = () => {
		setSelectedSkin(shuffledSkins[fixedIndex])
	}

	const startRolling = () => {
		setIsRolling(true)
		setSelectedSkin(null)
	}

	useEffect(() => {
		if (isOpen) {
			startRolling()
		}
	}, [isOpen])

	// const handleOpen = () => {
	// 	setSelectedSkin(null)
	// 	startRolling()
	// }

	document.body.style.overflow = isOpen ? 'hidden' : 'auto'
	const ref = useRef<HTMLDivElement>(null)
	useOutsideClick(ref, onClose)

	if (!isOpen) return null

	return (
		<div className='absolute h-screen inset-0 z-[200] bg-black/30 flex items-center justify-center'>
			<div
				ref={ref}
				className='relative-[z-60] w-[350px] h-[400px] bg-bgColor rounded-[20px] flex items-center justify-center overflow-hidden relative'>
				{!selectedSkin && (
					<>
						<div
							className='flex gap-2 relative'
							style={{
								transform: `translateX(-${offset}px)`,
								transition: isRolling ? 'none' : 'transform 0.5s ease-out' // измените длительность
							}}>
							{shuffledSkins.map((skin, index) => (
								<div
									key={index}
									className='flex-grow-0 flex-shrink-0 w-[200px]'>
									<SkinItem
										currency='tether'
										rarity={skin.rarity}
										imgUrl={skin.image_url}
										name={skin.name}
									/>
								</div>
							))}
						</div>
						<div className='h-[200px]'>
							<div className='h-[200px] w-[1px] bg-white absolute left-1/2 -translate-x-1/2'></div>
						</div>
					</>
				)}

				{selectedSkin && (
					<div>
						<div className='text-primary text-center mb-4 text-[32px]'>
							Поздравляем
						</div>
						<div className='w-[250px] relative'>
							<div className='w-full aspect-square rounded-[15px] bg-[#161616] flex items-center justify-center'>
								<img
									src={selectedSkin.image_url}
									alt=''
									className='z-50 w-[200px]'
								/>
							</div>
							<div className='px-3 mt-3 absolute left-1/2 -translate-x-1/2 -top-[2px] text-center'>
								{selectedSkin.name}
							</div>
							<div className='absolute left-1/2 -bottom-2 -translate-x-1/2 bg-bgColor shadow-inset-custom rounded-full z-50 pl-[3px] pr-[10px] flex items-center gap-[6px]'>
								<TetherIcon />
								<div className='font-medium text-[20px]'>
									{selectedSkin.price}
								</div>
							</div>

							<div className='absolute inset-0 overflow-hidden'>
								<div
									className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-[120px] rounded-full blur'
									style={{
										background: getColorRarity(selectedSkin.rarity)
									}}
								/>
							</div>
						</div>
						<div className='mt-5 mb-3'>
							<Button onClick={() => openCase()} isOrange>
								Открыть ещё
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
