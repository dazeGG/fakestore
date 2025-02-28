import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/products',
	},
	{
		path: '/products',
		children: [
			{
				path: '',
				name: 'CategoriesPage',
				component: () => import('@/pages/CategoriesPage.vue'),
			},
			{
				path: ':id(\\d+)',
				name: 'ProductPage',
				component: () => import('@/pages/ProductPage.vue'),
			},
			{
				path: ':category',
				name: 'ProductsPage',
				component: () => import('@/pages/ProductsPage.vue'),
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('@/layouts/404.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
