<template>
	<div>
		<NButton v-if="!addedProduct" size="small" type="primary" @click="addProduct">Buy</NButton>
		<NInputGroup v-else class="w-fit">
			<NButton size="small" @click="removeProduct">
				<template #icon>
					<Icon icon="mdi:minus" />
				</template>
			</NButton>
			<!--  TODO :value -> v-model  -->
			<NInputNumber
				:value="addedProduct.count"
				:show-button="false"
				size="small"
				:min="1"
				:max="99"
				class="max-w-12 text-center"
			/>
			<NButton :disabled="addedProduct.count === 99" size="small" @click="addProduct">
				<template #icon>
					<Icon icon="mdi:plus" />
				</template>
			</NButton>
		</NInputGroup>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/store'

import { NButton, NInputGroup, NInputNumber } from 'naive-ui'
import { Icon } from '@iconify/vue'

import type { IProduct } from '@/types/modules/products'

const cartStore = useCartStore()

const props = defineProps<{
	product: IProduct
}>()

const addedProduct = computed(() => {
	const productIndex: number = cartStore.getProductIndex(props.product.id)
	return productIndex === -1 ? null : cartStore.products[productIndex]
})

const removeProduct = () => {
	cartStore.removeProduct(props.product)
}

const addProduct = () => {
	cartStore.addProduct(props.product)
}
</script>
