export const Radio = ({ selected = false }: { selected?: boolean }) => {
	return (
		<div className='size-[24px] rounded-full border-[2px] border-primary flex items-center justify-center bg-[#1C2036]'>
			{selected && <div className='size-[12px] bg-primary rounded-full' />}
		</div>
	)
}
