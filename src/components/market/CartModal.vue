<template>
	<NModal :show="props.show" :style="{ maxWidth: '40rem' }" @mask-click="cartStore.closeCart">
		<NCard>
			<template #header>
				<div class="h2">Cart</div>
			</template>
			<template #header-extra>
				<div class="flex items-start gap-4">
					<NButton v-if="cartStore.products.length !== 0" size="small" @click="cartStore.clearCart">Clear cart</NButton>
					<button @click="cartStore.closeCart">
						<Icon icon="material-symbols:close-rounded" width="24" height="24" />
					</button>
				</div>
			</template>
			<template #default>
				<NEmpty v-if="cartStore.products.length === 0">There's empty. Add something to the cart.</NEmpty>
				<CartProduct
					v-for="(product, index) in cartStore.products"
					:key="product.id"
					:product="product"
					:show-divider="index !== cartStore.products.length - 1"
				/>
			</template>
			<template #footer>
				<div v-if="cartStore.products.length !== 0" class="flex justify-end">
					<NButton size="small" type="primary" @click="order">Order</NButton>
				</div>
			</template>
		</NCard>
	</NModal>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store'

import { NModal, NCard, NButton, NEmpty, useNotification } from 'naive-ui'
import { Icon } from '@iconify/vue'
import CartProduct from '@/components/market/CartProduct.vue'

const cartStore = useCartStore()
const notification = useNotification()

const props = defineProps<{
	show?: boolean
}>()

const order = () => {
	cartStore.clearCart()
	cartStore.closeCart()
	notification.success({
		title: 'Success',
		content: 'The order has successfully placed. Congratulations with the purchase!',
		duration: 3000,
		keepAliveOnHover: true,
	})
}
</script>
