import { PropsWithChildren, ReactNode, useEffect } from 'react'
import { CloseIcon } from '../icons/CloseIcon'

interface DrawerComponentProps extends PropsWithChildren {
	leftSideContent?: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

export const DrawerComponent = ({
	children,
	leftSideContent,
	isOpen,
	onClose
}: DrawerComponentProps) => {
	useEffect(() => {
		if (isOpen) {
			// Блокируем прокрутку
			document.documentElement.style.overflow = 'hidden'
		} else {
			// Возвращаем прокрутку
			document.documentElement.style.overflow = 'auto'
		}

		// Возвращаем прокрутку при размонтировании компонента
		return () => {
			document.documentElement.style.overflow = 'auto'
		}
	}, [isOpen])

	if (!isOpen) return null // Avoid rendering when not open

	return (
		<div className='fixed inset-0 bg-bgColor rounded-[50px_50px_0_0] border-t-[3px] border-[#4c4c4c] z-[100] flex justify-center overflow-hidden'>
			<div className='flex flex-col py-[40px] px-[50px] overflow-y-auto'>
				<div className='flex items-center justify-between'>
					<div>{leftSideContent}</div>
					<div className='cursor-pointer' onClick={onClose}>
						<CloseIcon />
					</div>
				</div>
				{children}
			</div>
		</div>
	)
}
