import { PropsWithChildren, ReactNode } from 'react'
import { CloseIcon } from '../icons/CloseIcon'
import { useNavigate } from 'react-router-dom'

interface DrawerProps extends PropsWithChildren {
	leftSideContent?: ReactNode
}

export const Drawer = ({ children, leftSideContent }: DrawerProps) => {
	const navigate = useNavigate()

	const handleClickClose = () => {
		navigate(-1)
	}

	return (
		<div className='bg-bgColor rounded-[50px_50px_0_0] border-t-[3px] border-[#4c4c4c] py-[40px] px-[20px]'>
			<div className='flex items-center justify-between'>
				<div>{leftSideContent}</div>
				<div className='cursor-pointer' onClick={() => handleClickClose()}>
					<CloseIcon />
				</div>
			</div>
			{children}
		</div>
	)
}
