import { useEffect } from 'react'

export const useOutsideClick = (
	ref: React.RefObject<HTMLElement>,
	callback: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// Проверяем, был ли клик за пределами элемента ref
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback()
			}
		}

		// Добавляем обработчик событий клика
		document.addEventListener('mousedown', handleClickOutside)

		// Удаляем обработчик событий при размонтировании компонента
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, callback])
}
