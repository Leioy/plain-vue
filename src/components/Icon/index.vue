<template>
	<svg class="pl-icon" :style="styleObj">
		<use :xlink:href="`#icon-${name}`"></use>
	</svg>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
	name:'PlIcon',
	props: {
		name: {
			type: String,
			required: true,
		},
		color: {
			type: String,
		},
		size: {
			type: String,
		},
	},
	setup (props) {
		const styleObj = computed(() => {
			return {
				fontSize: props.size,
				color: props.color,
			}
		})
		return { styleObj }
	},
})
</script>
