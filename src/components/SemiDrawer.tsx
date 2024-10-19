import { PropsWithChildren, ReactNode } from 'react'
import { CloseIcon } from '../icons/CloseIcon'

interface SemiDrawerProps extends PropsWithChildren {
	leftSideContent?: ReactNode
	isOpen: boolean
	onClose: () => void
}

export const SemiDrawer = ({
	isOpen,
	onClose,
	children,
	leftSideContent
}: SemiDrawerProps) => {
	if (!isOpen) return <></>

	return (
		<>
			<div
				onClick={() => onClose()}
				className='z-[40] absolute inset-0 filter blur-[1px] bg-gradient-to-b from-[rgba(28,32,54,0.5)] to-[rgba(201,168,107,0.5)]'></div>
			<div className='bg-bgColor rounded-[50px_50px_0_0] border-t-[3px] border-[#4c4c4c] py-[40px] px-[20px] absolute bottom-0 right-0 left-0 z-50'>
				<div className='flex items-center justify-between'>
					<div>{leftSideContent}</div>
					<div className='cursor-pointer' onClick={() => onClose()}>
						<CloseIcon />
					</div>
				</div>
				{children}
			</div>
		</>
	)
}
