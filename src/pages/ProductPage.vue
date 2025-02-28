<template>
	<div v-if="product" class="grid gap-4" :style="{ gridTemplateColumns: '25rem auto 15rem' }">
		<img :src="product.image" alt="" class="w-full aspect-square object-contain" />
		<div class="flex flex-col gap-2">
			<div class="flex gap-2">
				<Tag v-if="product.onSale">Sale</Tag>
				<Tag v-if="product.popular" type="info">Popular</Tag>
				<Tag v-if="product.discount">{{ product.discount }}%</Tag>
			</div>
			<NEllipsis class="h3" line-clamp="2">{{ product.title }}</NEllipsis>
			<div class="h6">{{ product.description }}</div>
			<NCard segmented size="small" class="mt-2">
				<template #header>
					<div class="h4">Characteristics</div>
				</template>
				<template #default>
					<div v-for="(value, key) in characteristicsItems" :key="key" class="flex gap-4 justify-between">
						<span class="font-bold">{{ capitalize(key) }}:</span>
						<NEllipsis>{{ value }}</NEllipsis>
					</div>
				</template>
			</NCard>
		</div>
		<NCard embedded size="small" class="h-fit">
			<div class="flex flex-col gap-2">
				<ProductPrice :product="product" show-full-price />
				<BuyButtonsSet :product="product" show-cart-button />
			</div>
		</NCard>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { capitalize } from 'lodash'
import { ProductsServices } from '@/lib/api/services'

import { NCard, NButton, NEllipsis } from 'naive-ui'
import Tag from '@/components/modules/products/misc/Tag.vue'
import ProductPrice from '@/components/modules/products/ProductPrice.vue'
import BuyButtonsSet from '@/components/market/BuyButtonsSet.vue'

import type { IProduct } from '@/types/modules/products'

const product = ref<IProduct | null>(null)
const productId = computed<number>(() => parseInt(useRoute().params.productId as string))

const characteristicsItems = computed<Record<string, any>>(() => {
	return product.value
		? {
			brand: product.value.brand,
			color: product.value.color,
			category: product.value.category,
			model: product.value.model,
		}
		: {}
})

const fullPrice = computed<number | null>(() => {
	if (product.value && product.value.discount) {
		return product.value.price / (1 - (product.value.discount / 100))
	} else {
		return null
	}
})

const loadProduct = async () => {
	product.value = (await ProductsServices.getProduct(productId.value)).product
}

const created = () => {
	loadProduct()
}

created()
</script>
