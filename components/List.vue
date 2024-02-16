<template>
  <div>this is {{ props.name }}</div>
</template>

<script setup lang="ts">
  const props = defineProps({
    name: String
  })
</script>

<style scoped></style>
