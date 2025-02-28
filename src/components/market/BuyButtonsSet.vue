<template>
	<div>
		<NButton v-if="!addedProduct" size="small" type="primary" class="w-full" @click="addProduct">Buy</NButton>
		<div v-else class="flex gap-2 justify-end">
			<NInputGroup class="w-fit">
				<NButton size="small" @click="decrementProduct">
					<template #icon>
						<Icon icon="mdi:minus" />
					</template>
				</NButton>
				<!--  TODO :value -> v-model  -->
				<NInputNumber
					v-model:value="productCount"
					:show-button="false"
					size="small"
					:min="1"
					:max="99"
					class="max-w-12 text-center"
					@update:value="handleProductCountUpdate"
				/>
				<NButton :disabled="addedProduct.count === 99" size="small" @click="incrementProduct">
					<template #icon>
						<Icon icon="mdi:plus" />
					</template>
				</NButton>
			</NInputGroup>
			<NButton v-if="props.showCartButton" size="small" type="primary" @click="openCart">
				<template #icon>
					<Icon icon="mdi:arrow-right" />
				</template>
				<template #default>Cart</template>
			</NButton>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useCartStore } from '@/store'

import { NButton, NInputGroup, NInputNumber } from 'naive-ui'
import { Icon } from '@iconify/vue'

import type { IProduct } from '@/types/modules/products'

const cartStore = useCartStore()

const props = defineProps<{
	product: IProduct
	showCartButton?: boolean
}>()

const productCount = ref<number | null>(null)

const addedProduct = computed(() => {
	const productIndex: number = cartStore.getProductIndex(props.product.id)
	return productIndex === -1 ? null : cartStore.products[productIndex]
})

const openCart = () => {
	cartStore.openCart()
}

const decrementProduct = () => {
	cartStore.decrementProduct(props.product)
}

const addProduct = () => {
	cartStore.addProduct(props.product)
}

const incrementProduct = () => {
	cartStore.incrementProduct(props.product)
}

const handleProductCountUpdate = () => {
	if (productCount.value) {
		cartStore.setProductCount(props.product, productCount.value)
	} else {
		cartStore.removeProduct(props.product)
	}
}

const initProductCount = () => {
	productCount.value = addedProduct.value?.count ?? null
}

const created = () => {
	initProductCount()
}

created()

watch(
	() => addedProduct.value?.count,
	(newValue?: number) => {
		productCount.value = newValue ?? null
	},
)
</script>
