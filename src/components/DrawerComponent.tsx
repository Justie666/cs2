import { PropsWithChildren, ReactNode } from 'react'
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
	if (!isOpen) return <></>

	return (
		<div className='absolute inset-0 bg-bgColor rounded-[50px_50px_0_0] border-t-[3px] border-[#4c4c4c] py-[40px] px-[50px]'>
			<div className='flex items-center justify-between'>
				<div>{leftSideContent}</div>
				<div className='cursor-pointer' onClick={onClose}>
					<CloseIcon />
				</div>
			</div>
			{children}
		</div>
	)
}
