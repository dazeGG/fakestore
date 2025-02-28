<template>
	<NModal v-model:show="show" :style="{ maxWidth: '50rem' }">
		<NCard segmented>
			<template #header>
				Cart
			</template>
			<template #header-extra>
				<button @click="close">
					<Icon icon="material-symbols:close-rounded" width="24" height="24" />
				</button>
			</template>
			<template #default>
				Products
			</template>
		</NCard>
	</NModal>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store'

import { NModal, NCard } from 'naive-ui'
import { Icon } from '@iconify/vue'

const cartStore = useCartStore()

const show = defineModel<boolean>('show', { default: false })

const close = () => {
	show.value = false
}
</script>
