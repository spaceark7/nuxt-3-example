<template>
  <div>
    <div v-if="props.section_name === 'sections.hero-ret'">
      <HeroSection :data="props.data" />
    </div>
    <div v-else-if="props.section_name === 'sections.about-ret'">
      <AboutSection :data="props.data" />
    </div>
    <div v-else-if="props.section_name === 'ColumnWithImage'">
      <ColumnWithImageSection :data="props.data" />
    </div>
    <div v-else-if="props.section_name === 'ColumnWithGridList'">
      <ColumnWithGridListSection :data="props.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    section_name: String,
    data: Object as PropType<any>
  })

  console.log(props.section_name)
</script>

<style scoped></style>
