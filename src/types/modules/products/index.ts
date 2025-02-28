interface IProduct {
	id: number
	title: string
	image: string
	price: number
	description: string
	brand: string
	model: string
	color: string
	category: string
	discount?: number
	onSale?: boolean
	popular?: boolean
}

type AddedProduct = IProduct & {
	count: number
}

export type {
	IProduct,
	AddedProduct,
}
