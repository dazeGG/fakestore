<template>
	<NTag
		round
		:bordered="false"
		size="small"
		type="error"
		:style="{ fontSize: '0.625rem' }"
	>
		{{ props.discount }}%
	</NTag>
</template>

<script setup lang="ts">
import { NTag } from 'naive-ui'

const props = defineProps<{
	discount: number
}>()
</script>
