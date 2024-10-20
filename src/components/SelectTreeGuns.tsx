import { useRef, useState } from 'react'
import { ArrowUpSelectIcon } from '../icons/ArrowUpSelectIcon'
import { useOutsideClick } from '../hooks/useOutsideClick'

export const SelectTreeGuns = ({
	options,
	selected,
	setSelected
}: {
	options: Gun[]
	selected: number | null
	setSelected: (value: number | null) => void
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [expanded, setExpanded] = useState<number[]>([]) // Track which items are expanded

	const handleSelect = (value: number | null) => {
		setSelected(value)
		setIsOpen(false)
	}

	const toggleExpand = (id: number) => {
		setExpanded(prev =>
			prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
		)
	}

	const ref = useRef<HTMLDivElement>(null)

	// Close dropdown when clicked outside
	useOutsideClick(ref, () => setIsOpen(false))

	// Recursive function to render options and their children
	const renderOptions = (guns: Gun[], level = 0) => {
		return guns.map(gun => (
			<div key={gun.id} style={{ paddingLeft: `${level * 15}px` }}>
				<div
					className='flex justify-between items-center cursor-pointer'
					onClick={() => {
						if (gun.children && gun.children.length > 0) {
							toggleExpand(gun.id) // Only toggle expand for parents
						} else {
							handleSelect(gun.id) // Only select if no children
						}
					}}>
					<span
						className={`text-[15px] font-medium ${
							gun.id === selected ? 'text-white' : 'text-gray-300'
						}`}>
						{gun.name}
					</span>
					{/* Only show the arrow if the gun has children */}
					{gun.children && gun.children.length > 0 && (
						<div
							className={`${
								expanded.includes(gun.id) ? 'rotate-0' : 'rotate-180'
							}`}>
							<ArrowUpSelectIcon />
						</div>
					)}
				</div>
				{/* Recursively render children if the parent is expanded */}
				{expanded.includes(gun.id) && gun.children && (
					<div className='ml-4'>
						{renderOptions(gun.children, level + 1)}{' '}
						{/* Increase level for indentation */}
					</div>
				)}
			</div>
		))
	}

	const findSelectedGun = (
		guns: Gun[],
		selectedName: number | null
	): Gun | undefined => {
		for (const gun of guns) {
			if (gun.id === selectedName) {
				return gun
			}
			// If this gun has children, search recursively
			if (gun.children) {
				const foundInChildren = findSelectedGun(gun.children, selectedName)
				if (foundInChildren) {
					return foundInChildren
				}
			}
		}
		return undefined
	}

	return (
		<div ref={ref} className='bg-[#4C4C4C] rounded-[19px] p-4 w-full'>
			<div
				className='text-[15px] font-medium flex justify-between items-center cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}>
				{selected ? findSelectedGun(options, selected)?.name : 'Оружие'}
				<div className={`${isOpen ? 'rotate-0' : 'rotate-180'}`}>
					<ArrowUpSelectIcon />
				</div>
			</div>
			{isOpen && (
				<div className='mt-2'>
					<div className='w-full h-[1px] bg-white my-2'></div>
					<div className='max-h-60 overflow-auto'>{renderOptions(options)}</div>
				</div>
			)}
		</div>
	)
}
