<template>
	<div v-if="product" class="flex gap-4">
		<img :src="product.image" alt="" class="w-96 aspect-square object-contain" />
		<div class="flex flex-col gap-4" :style="{ maxWidth: '30rem' }">
			<div class="flex gap-2 items-center">
				<NEllipsis class="h1">{{ product.title }}</NEllipsis>
				<Tag v-if="product.onSale">Sale</Tag>
				<Tag v-if="product.popular" type="info">Popular</Tag>
				<Tag v-if="product.discount">{{ product.discount }}%</Tag>
			</div>
			<div class="h6">{{ product.description }}</div>
			<NCard segmented size="small" class="mt-2">
				<template #header>
					<div class="h2">Characteristics</div>
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
			<div class="flex flex-col gap-4">
				<div class="flex items-center">
					<div class="h2">{{ product.price }}$</div>
					<span class="line-through">full price placeholder</span>
				</div>
				<NButton type="primary">Buy</NButton>
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

import type { IProduct } from '@/types/modules/products'

const product = ref<IProduct | null>(null)
const productId = computed<number>(() => parseInt(useRoute().params.id as string))

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

const loadProduct = async () => {
	product.value = (await ProductsServices.getProduct(productId.value)).product
}

const created = () => {
	loadProduct()
}

created()
</script>
