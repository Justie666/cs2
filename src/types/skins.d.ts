type Quality = 'BS' | 'WW' | 'FT' | 'MW' | 'FN'
type Rarity = 'CG' | 'IQ' | 'AQ' | 'PR' | 'CL' | 'SE' | 'CO'
type Sorting = 'popular' | 'cheaper' | 'dearly'

interface GetSkinsParams {
	limit: number
	offset: number
	sorting: Sorting
	gun_id: number | null
	quality: Quality | null
	rarity: Rarity | null
	name: string | null
}

interface GetSkinsSearchParams {
	name: string
}

interface Skin {
	id: number
	name: string
	price: number
	gun_id: number
	quality: Quality
	rarity: Rarity
	image_url: string
}

interface SkinSearch {
	id: number
	name: string
}

interface Gun {
	id: number
	name: string
	children: Gun[]
}
