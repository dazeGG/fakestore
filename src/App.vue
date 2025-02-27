<template>
	<NConfigProvider :theme="darkTheme" :theme-overrides="naiveRemConvert">
		<CategoriesPage />
	</NConfigProvider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import naiveRemConvert from '@/plugin/naiveRemConvert.ts'

import { NConfigProvider } from 'naive-ui'
import CategoriesPage from '@/pages/CategoriesPage.vue'
</script>
