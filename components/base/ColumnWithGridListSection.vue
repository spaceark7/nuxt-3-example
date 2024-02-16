<template>
  <Wrapper>
    <div
      class="tw-flex tw-flex-col tw-justify-center tw-my-auto tw-min-h-[60dvh] tw-py-16 lg:tw-py-0">
      <h2
        class="tw-text-3xl tw-font-semibold tw-text-center tw-max-w-3xl tw-mx-auto">
        {{ props.data.title }}
      </h2>
      <p class="tw-text-gray-600 tw-mx-auto tw-text-center tw-max-w-prose">
        {{ props.data.description }}
      </p>
      <div
        class="tw-grid tw-grid-cols-1 tw-mt-10 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
        <!-- <div
          v-for="(item, index) in props.data.grid_items"
          :key="index"
          class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-aspect-video tw-bg-white/10 tw-rounded-md">
          <img
            :src="`/images/${item.image.large}`"
            class="tw-w-72 tw-h-tw-w-72 tw-rounded-sm tw-object-contain tw-mb-4" />
        </div> -->
        <Card
          v-for="(item, index) in props.data.grid_items"
          class="tw-bg-white/10 tw-rounded-md tw-mb-4"
          style="overflow: hidden"
          :pt="{
            root: {
              class:
                'tw-bg-white/5 tw-backdrop-blur-xl tw-rounded-md tw-mb-4 tw-text-white tw-overflow-hidden'
            }
          }">
          <template #header>
            <Image
              :src="`/images/${item.image.large}`"
              class="tw-rounded-sm tw-object-contain tw-mb-4"
              width="100%"
              height="100%"
              preview />
          </template>
          <template #title>
            {{ item.title }}
          </template>
          <template #content>
            <p class="tw-m-0 tw-text-gray-500">
              {{ item.description }}
            </p>
          </template>

          <template #footer>
            <div v-if="item.buttons && item.buttons.length > 0" class="tw-mb-4">
              <Button
                v-for="button in item.buttons"
                :label="button.name"
                outlined
                severity="secondary"
                class="tw-text-white tw-h-fit tw-rounded-full tw-border-white"
                size="small" />
            </div>
          </template>
        </Card>
      </div>
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

  console.log(props.data)
</script>

<style scoped></style>
