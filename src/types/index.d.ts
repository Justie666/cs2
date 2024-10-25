type BetTypeFilter = 'current' | 'history'

type ShopType = 'cases' | 'skins'

type CasesType = 'free' | 'paid'

interface UserMain {
	photo_url: string
	count_clip: number
	balance_coin: number
	balance_usdt: number
	balance_referrers: number
}

interface IStatistics {
	total_bets: number
	total_skins: number
	total_referrals: number
	total_opened_cases: number
	total_days_on_platform: number
}

interface IReferrals {
	photo_url: string
}

// light blue | blue | purple | pink | red
type QualitySkin = 'BS' | 'WW' | 'FT' | 'MW' | 'FN'

interface ISkins {
	id: number
	name: string
	price: number
	gun_id: number
	quality: QualitySkin
	image_url: string
}

interface ITeam {
	id: number
	name: string
	logo_url: string
}

interface IEventTeam {
	id: number
	score: number
	total_coin: number
	total_usdt: number
	team: ITeam
}

interface IEvent {
	id: number
	date_start: string
	status: string
	created_at: string
	teams: IEventTeam[]
}

interface IBets {
	id: number
	bet_type: string
	bet: boolean
	currency: string
	amount: number
	active: boolean
	event_team: IEventTeam[]
	event: IEvent
}

interface IStatistics {
	total_bets: number
	total_skins: number
	total_referrals: number
	total_opened_cases: number
	total_days_on_platform: number
}

interface IReferrals {
	photo_url: string | null
}

interface ISkins {
	id: number
	name: string
	price: number
	gun_id: number
	quality: string
	image_url: string
	rarity: Rarity
}

interface ITeam {
	id: number
	name: string
	logo_url: string
}

interface ITeams {
	id: number
	score: number
	total_coin: number
	total_usdt: number
	team: ITeam
}

interface IEvent {
	id: number
	date_start: string
	status: boolean
	created_at: string
	won: number | null
	won_first_map: number | null
	won_second_map: number | null
	dry_bill: number | null
	knife: number | null
	teams: ITeams[]
}

type BetType =
	| 'win'
	| 'dry_bill'
	| 'winner_first_card'
	| 'winner_second_card'
	| 'knife'

type Currency = 'coin' | 'usdt'

interface IBets {
	id: number
	event_team_id: number
	bet_type: BetType
	bet: boolean
	currency: Currency
	amount: number
	active: boolean
	event: IEvent
}

interface UserFull {
	statistics: IStatistics
	referrals: IReferrals[] | null
	skins: ISkins[] | null
	bets: IBets[] | null
}

interface CreateUserData {
	id: string
	name: string
	username: string
	referrer_id: string | null
	time_zone: string
}

interface LoginData {
	init_data: string
	user_id: string
	username: string
}

interface GetTradeURLResponse {
	trade_url: string
}

interface UpdateTradeURLData {
	trade_url: string
}

interface CreateBetData {
	event_id: number
	event_team_id: number | null
	bet_type: BetType
	bet: boolean
	currency: Currency
	amount: number
}

interface Options {
	value: string
	title: string
}

interface PathCoinData {
	value: number
}

interface OutputSkinData {
	id: number
}

type Success =
	| 'success'
	| 'not_found_trade_url'
	| 'no_validated_trade_url'
	| 'not_found_skin'
	| 'no_skins'
	| 'no_money'
	| 'didnt_buy'
	| 'unknown_error'

interface SellSkinData {
	id: number
}
