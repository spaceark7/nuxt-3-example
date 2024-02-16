<template>
  <div
    class="tw-z-50 tw-fixed tw-w-full"
    :class="
      scrollYPos > 20
        ? 'tw-bg-white/5 tw-backdrop-blur-sm tw-transition-all tw-ease-in-out tw-duration-500'
        : ''
    ">
    <div
      class="tw-flex tw-justify-between tw-max-h-24 tw-p-8 md:tw-px-14 lg:tw-px-32"
      :class="
        scrollYPos > 20
          ? 'tw-max-h-16 tw-transition-all tw-ease-in-out tw-duration-500'
          : ''
      ">
      <div class="tw-flex tw-gap-2 tw-items-center">
        <NuxtLink class="tw-no-underline" to="/">
          <div class="tw-flex tw-gap-2 tw-items-center">
            <img
              src="~/assets/images/logo_retts.png"
              alt="Retts logo"
              class="tw-w-8 tw-h-8 tw-bg-white tw-rounded-md tw-p-1" />
            <h2 class="tw-text-white tw-font-medium tw-text-2xl">Retts</h2>
          </div>
        </NuxtLink>
        <Divider layout="vertical" />
        <div>
          <Button label="Tentang" text class="tw-text-white" />
          <Button label="Layanan" text class="tw-text-white" />
          <Button label="Portofolio" text class="tw-text-white" />
          <Button label="Kontak" text class="tw-text-white" />
        </div>
      </div>
      <div class="tw-flex tw-items-center tw-justify-center">
        <Button
          label="Hubungi kami"
          :outlined="scrollYPos < 20"
          class="tw-h-fit tw-rounded-full"
          :class="
            scrollYPos > 20
              ? 'tw-bg-white tw-text-black'
              : 'tw-text-white tw-border-white'
          " />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const scrollYPos = ref(0)

  onMounted(() => {
    window.addEventListener('scroll', () => {
      scrollYPos.value = window.scrollY
    })
  })

  watch(
    () => scrollYPos.value,
    (val) => {
      if (val > 0) {
        console.log('scrolled', scrollYPos.value)
      }
    }
  )
</script>

<style scoped></style>
