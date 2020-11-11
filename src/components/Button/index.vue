<template>
	<button :class="classObj">
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

type TButtonType = 'default' | 'primary' | 'info' | 'warning' | 'success' | 'error' | 'text'
type TButtonSize = 'large' | 'small' | 'mini'

interface IButtonProps {
	type: TButtonType
	size: TButtonSize
	icon: string
	round: boolean
	loading: boolean
	disabled: boolean
}

export default defineComponent({
	props: {
		type: {
			type: String as PropType<TButtonType>,
			default: 'default',
			validator (val: string) {
				return [ 'default', 'primary', 'info', 'warning', 'success', 'error', 'text' ].includes(val)
			},
		},
		size: {
			type: String as PropType<TButtonSize>,
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
		const { type } = props as IButtonProps
		const classObj = computed(() => {
			return [
				'iS-button',
				`iS-button-${type}`,
			]
		})
		return { classObj }
	},
})
</script>
