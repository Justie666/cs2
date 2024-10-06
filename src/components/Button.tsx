interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	isOrange?: boolean
	isBlue?: boolean
}

export const Button = ({
	children,
	isOrange,
	isBlue,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={`text-[#000] text-[15px] font-medium w-full py-2 rounded-[8px] ${
				isOrange ? 'bg-primary' : isBlue ? 'bg-[#61D9D4]' : 'bg-[#ABABAB]'
			}`}
			{...rest}>
			{children}
		</button>
	)
}
