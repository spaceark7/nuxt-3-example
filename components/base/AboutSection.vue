<template>
  <Wrapper>
    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-min-h-[80dvh]">
      <img
        :src="image"
        class="tw-rounded-sm tw-w-full tw-h-full tw-object-contain tw-p-12" />
      <div
        class="tw-flex tw-flex-col tw-justify-center tw-my-auto lg:tw-col-span-1 tw-h-full tw-py-16 lg:tw-py-0">
        <h2 class="tw-text-3xl tw-font-semibold">
          {{ props.data.title }}
        </h2>
        <p
          v-for="paragraph in props.data.description"
          class="tw-text-gray-600 tw-mt-4 tw-max-w-xl">
          <!-- {{ props.data.description }} -->
          <span v-for="(text, index) in paragraph.children" :key="index">
            {{ text.text }}
          </span>
        </p>
      </div>
    </div>
  </Wrapper>
</template>

<script setup lang="ts">
  import type { ContentSection, DAT } from '~/types/content'

  const props = defineProps({
    data: {
      type: Object as PropType<ContentSection>,
      required: true
    }
  })

  const config = useRuntimeConfig()

  const image =
    config.public.baseUrl +
    (props.data?.picture?.data as DAT[])[0].attributes.url

  console.log(image)
  console.log(props.data)
  // const image = ref<string>('')
  // const imageSm = ref<string>('')

  // if (props.data) {
  //   image.value = `/images/${props?.data?.image?.large}`
  //   imageSm.value = `/images/${props?.data?.image?.small}`
  // }
</script>

<style scoped></style>
