<template>
	<NTag
		size="small"
		:type="props.type"
		:style="{ fontSize: '0.625rem' }"
	>
		<slot></slot>
	</NTag>
</template>

<script setup lang="ts">
import { NTag } from 'naive-ui'

const props = withDefaults(
	defineProps<{
		type?: 'error' | 'default' | 'primary' | 'info' | 'success' | 'warning'
	}>(),
	{
		type: 'error',
	},
)
</script>
