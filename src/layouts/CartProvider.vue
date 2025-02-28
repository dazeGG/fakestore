<template>
	<div>
		<CartModal v-model:show="showModal" />
		<NFloatButton type="primary" class="z-10" :bottom="50" :right="50" @click="openModal">
			<Icon icon="mdi:cart-variant" />
		</NFloatButton>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { NFloatButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import CartModal from '@/components/market/CartModal.vue'

const showModal = ref<boolean>(false)

const openModal = () => {
	showModal.value = true
}
</script>
