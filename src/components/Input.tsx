import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: ReactNode
}

export const Input = ({ icon, ...rest }: InputProps) => {
	return (
		<div className='relative'>
			<input
				type='text'
				{...rest}
				className={`rounded-[27px] border border-primary text-[20px] font-medium px-[35px] py-[10px] text-[#ABABAB] shadow-[inset_3px_3px_27.6px_0px_rgba(0,0,0,0.8)] bg-[#2C2C2C] w-full ${
					icon ? 'pl-[50px]' : ''
				}`}
			/>
			<div className='absolute top-1/2 -translate-y-1/2 left-4'>{icon}</div>
		</div>
	)
}
