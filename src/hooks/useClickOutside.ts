import { useEffect } from 'react'

const useClickOutside = (
	ref: React.RefObject<HTMLElement>,
	callback: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// Проверяем, что клик был вне элемента, на который передан реф
			if (ref.current && !ref.current.contains(event.target as Node | null)) {
				callback()
			}
		}

		// Добавляем слушатель события
		document.addEventListener('mousedown', handleClickOutside)

		// Убираем слушатель при размонтировании
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, callback])
}

export default useClickOutside
