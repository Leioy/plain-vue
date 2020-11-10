<template>
	<div :class="classObj">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

type TButtonType = PropType<'default' | 'primary' | 'info' | 'warning' | 'success' | 'error' | 'text'>
type TButtonSize = PropType<'large' | 'small' | 'mini'>
export default defineComponent({
	props: {
		type: {
			type: String as TButtonType,
			default: 'default',
			validator (val: string) {
				return [ 'default', 'primary', 'info', 'warning', 'success', 'error', 'text' ].includes(val)
			},
		},
		size: {
			type: String as TButtonSize,
			validator (val: string) {
				return [ 'large', 'small', 'mini' ].includes(val)
			},
		},
		icon: String,
		round: Boolean,
		loading: Boolean,
		disabled: Boolean,
	},
	setup (props) {
		const classObj = computed(() => {
			return [
				'iS-button',
				`iS-button-${props.type}`,
			]
		})
		return { classObj }
	},
})
</script>
