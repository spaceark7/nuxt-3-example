<template>
  <Wrapper>
    <div
      class="tw-flex tw-flex-col tw-justify-center tw-my-auto tw-min-h-[60dvh] tw-py-16 lg:tw-py-0">
      <h2
        class="tw-text-3xl tw-font-semibold tw-text-center tw-max-w-3xl tw-mx-auto">
        {{ props.data.title }}
      </h2>
      <p
        class="tw-text-gray-600 tw-mt-4 tw-mx-auto tw-text-center tw-max-w-prose">
        {{ props.data.description }}
      </p>
      <img
        :src="image"
        class="tw-rounded-sm tw-w-full tw-h-96 tw-object-contain tw-p-12" />
    </div>
  </Wrapper>
</template>

<script setup lang="ts">
  import type { Section } from '~/types/content'

  const props = defineProps({
    data: {
      type: Object as PropType<Section>,
      required: true
    }
  })

  const image = ref<string>('')
  const imageSm = ref<string>('')

  if (props.data) {
    image.value = `/images/${props?.data?.image?.large}`
    imageSm.value = `/images/${props?.data?.image?.small}`
  }
</script>

<style scoped></style>
