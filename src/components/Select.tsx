import { useRef, useState } from 'react'
import { ArrowUpSelectIcon } from '../icons/ArrowUpSelectIcon'
import { useOutsideClick } from '../hooks/useOutsideClick'

export const Select = ({
	options,
	selected,
	setSelected
}: {
	options: { value: string | null; title: string }[]
	selected: string | null
	setSelected: (value: string | null) => void
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleSelect = (value: string | null) => {
		setIsOpen(false)
		setSelected(value)
	}

	const ref = useRef<HTMLDivElement>(null) // Создаем реф для контейнера

	// Закрываем выпадающий список при клике вне компонента
	useOutsideClick(ref, () => setIsOpen(false))

	return (
		<div ref={ref} className='bg-[#4C4C4C] rounded-[19px] p-4 w-full'>
			<div
				className='text-[15px] font-medium flex justify-between items-center'
				onClick={() => setIsOpen(!isOpen)}>
				{options.find(option => option.value === selected)?.title}
				<div className={`${isOpen ? 'rotate-0' : 'rotate-180'}`}>
					<ArrowUpSelectIcon />
				</div>
			</div>
			{isOpen && (
				<div>
					<div className='w-full h-[1px] bg-white my-2'></div>
					{isOpen &&
						options
							.filter(option => option.value !== selected)
							.map(option => (
								<div
									onClick={() => handleSelect(option.value)}
									className='cursor-pointer py-1'
									key={option.title}>
									{option.title}
								</div>
							))}
				</div>
			)}
		</div>
	)
}
