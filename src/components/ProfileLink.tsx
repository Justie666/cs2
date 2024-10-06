import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ProfileLinkProps {
	title: string
	to: string
	svg: ReactNode
}

export const ProfileLink = ({ svg, title, to }: ProfileLinkProps) => {
	return (
		<Link
			to={to}
			className='size-[93px] px-2 bg-[#4C4C4C] rounded-[18px] shadow-[inset_0px_3px_4px_0px_#000000,_0px_4px_4px_0px_#00000040] flex flex-col items-center justify-center gap-1'>
			{svg}
			<div className='text-[12px]'>{title}</div>
		</Link>
	)
}
