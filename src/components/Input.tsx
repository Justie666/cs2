import { InputHTMLAttributes } from 'react'

export const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			type='text'
			{...rest}
			className='rounded-[27px] border border-primary text-[20px] font-medium px-[35px] py-[10px] text-[#ABABAB] shadow-[inset_3px_3px_27.6px_0px_rgba(0,0,0,0.8)] bg-[#2C2C2C] w-full'
		/>
	)
}
