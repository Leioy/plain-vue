<template>
	<button :class="classObj" @click="click" :disabled="disabled">
		<Icon v-if="loading" name="loading"></Icon>
		<Icon :name="icon" v-if="icon && !loading"></Icon>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import Icon from '@/components/Icon/index.vue'

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
	name: 'PlButton',
	components: { Icon },
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
	// 这里完全可以不用自定义事件，这里这样写是为了熟悉vue3
	emits: {
		click: (payload: MouseEvent) => {
			return payload instanceof MouseEvent
		},
	},
	setup (props, { emit }) {
		const { type, disabled, loading, round, size } = props as IButtonProps
		const classObj = computed(() => {
			return [
				'pl-button',
				`pl-button-${type}`,
				{
					'pl-button-disabled': disabled,
					'pl-button-loading': loading,
					'pl-button-round': round,
					[`pl-button-${size}`]: size,
				},
			]
		})
		const click = (e: MouseEvent) => {
			emit('click', e)
		}
		return { classObj, click }
	},
})
</script>
