import { useRef, useState } from 'react'
import { Drawer } from '../components/Drawer'
import { ArrowDownIcon } from '../icons/ArrowDownIcon'
import { Radio } from '../components/Radio'
import useClickOutside from '../hooks/useClickOutside'

export const SettingsPage = () => {
	const [isOpenLanguage, setIsOpenLanguage] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const handleOpenSetLanguage = () => {
		setIsOpenLanguage(true)
	}

	const handleSelectLanguage = () => {
		setIsOpenLanguage(false)
	}

	// Используем хук useClickOutside для обработки клика вне меню
	useClickOutside(dropdownRef, () => setIsOpenLanguage(false))

	return (
		<Drawer
			leftSideContent={
				<div className='text-primary text-[32px] font-semibold'>Настройки</div>
			}>
			<div className='relative'>
				<button
					onClick={handleOpenSetLanguage}
					className='w-full text-start mt-[40px] border-b border-b-primary'>
					<div className='text-[20px] font-bold'>Язык</div>
					<div className='flex items-center justify-between mt-[20px]'>
						Русский
						{isOpenLanguage && <ArrowDownIcon />}
						{!isOpenLanguage && <ArrowDownIcon />}
					</div>
				</button>
				{isOpenLanguage && (
					<div
						ref={dropdownRef}
						className='absolute z-20 w-full -bottom-[130px] bg-[#4C4C4C] px-[20px] py-[40px]'>
						<button
							onClick={handleSelectLanguage}
							className='w-full flex items-center justify-between py-[10px]'>
							Английский
							<Radio />
						</button>
						<button
							onClick={handleSelectLanguage}
							className='w-full flex items-center justify-between py-[10px]'>
							Русский
							<Radio selected />
						</button>
					</div>
				)}
			</div>
		</Drawer>
	)
}
