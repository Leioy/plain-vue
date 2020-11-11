<template>
	<button :class="classObj" @click="click" :disabled="disabled">
		<is-icon v-if="loading" name="loading"></is-icon>
		<is-icon :name="icon" v-if="icon && !loading"></is-icon>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import IsIcon from '@/components/Icon/index.vue'

type TButtonType = 'default' | 'primary' | 'info' | 'warning' | 'success' | 'error' | 'text'
type TButtonSize = 'large' | 'small'

interface IButtonProps {
	type: TButtonType
	size: TButtonSize
	icon: string
	round: boolean
	loading: boolean
	disabled: boolean
}

export default defineComponent({
	components: { IsIcon },
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
				return [ 'large', 'small' ].includes(val)
			},
		},
		icon: String,
		round: Boolean,
		loading: Boolean,
		disabled: Boolean,
	},
	setup (props) {
		const { type, disabled, loading, round, size } = props as IButtonProps
		const classObj = computed(() => {
			return [
				'iS-button',
				`iS-button-${type}`,
				{
					'iS-button-disabled': disabled,
					'iS-button-loading': loading,
					'is-button-round': round,
					[`iS-button-${size}`]: size,
				},
			]
		})
		const click = () => {console.log(1)}
		return { classObj, click }
	},
})
</script>
