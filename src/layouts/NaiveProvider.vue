<template>
	<NConfigProvider :theme="lightTheme" :theme-overrides="naiveRemConvert">
		<NGlobalStyle />
		<slot></slot>
	</NConfigProvider>
</template>

<script setup lang="ts">
import { lightTheme } from 'naive-ui'
import naiveRemConvert from '@/plugin/naiveRemConvert.ts'

import { NConfigProvider, NGlobalStyle } from 'naive-ui'
</script>
