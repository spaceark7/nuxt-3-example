<template>
  <Wrapper>
    <div class="tw-grid tw-z-0 tw-grid-cols-2 tw-justify-between tw-h-[100dvh]">
      <div
        class="tw-z-10 tw-my-auto tw-col-span-2 lg:tw-col-span-1 tw-text-center lg:tw-text-left">
        <h1 class="tw-text-4xl tw-font-bold tw-text-dark-on-surface">
          {{ props.data.title }}
        </h1>
        <p class="tw-text-lg tw-font-light tw-text-dark-on-surface">
          {{ props.data.description }}
        </p>
        <ClientOnly v-if="props.data.buttons">
          <div class="tw-flex tw-gap-7 tw-justify-center lg:tw-justify-start">
            <div v-for="(button, index) in props.data.buttons">
              <Button
                v-if="button.type === 'action'"
                :key="index"
                :label="button.text"
                size="large"
                class="tw-rounded-full tw-bg-gradient-to-r tw-from-dark-primary tw-to-orange-500" />

              <NuxtLink
                v-else
                :key="button.text + index"
                :to="button.url"
                class="tw-no-underline">
                <Button
                  class="tw-rounded-full"
                  size="large"
                  :label="button.text" />
              </NuxtLink>
            </div>
          </div>
        </ClientOnly>
      </div>
      <div class="tw-absolute tw-top-0 tw-right-0 -tw-z-0">
        <img
          :srcset="`${image} 1920w, ${image} 1024w, ${image} 768w, ${image} 640w`"
          alt="Hero image"
          class="tw-w-full tw-h-[100dvh] tw-hidden tw-object-cover xl:tw-object-contain sm:tw-block" />
        <img
          :src="image"
          alt="Hero image"
          class="tw-w-screen tw-h-[100dvh] tw-object-cover sm:tw-hidden" />
      </div>
    </div>
  </Wrapper>
</template>

<script setup lang="ts">
  import type { ContentSection, DAT } from '~/types/content'
  const config = useRuntimeConfig()
  // import type { Section } from '~/types/content'
  // const image = ref<string>('')
  // const imageSm = ref<string>('')
  const props = defineProps({
    data: {
      type: Object as PropType<ContentSection>,
      required: true
    }
  })
  const image =
    config.public.baseUrl + (props.data?.picture?.data as DAT).attributes.url

  console.log(image)
  console.log(props.data)
  // if (props.data) {
  //   image.value = `/images/${props?.data?.image?.large}`
  //   imageSm.value = `/images/${props?.data?.image?.small}`
  // }
</script>

<style scoped></style>
