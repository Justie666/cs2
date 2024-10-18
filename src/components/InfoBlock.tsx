interface InfoBlockProps {
	title: string
	value: string | number
}
export const InfoBlock = ({ title, value }: InfoBlockProps) => {
	return (
		<div>
			<div className='text-[18px] font-bold mb-2'>{title}</div>
			<div className='overflow-hidden rounded-[27px] border border-primary text-[20px] font-medium px-[35px] py-[10px] flex items-center justify-center text-[#ABABAB]'>
				{value}
			</div>
		</div>
	)
}
