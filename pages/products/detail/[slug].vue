<template>
  <div>This is detail {{ slug }}</div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const slug = route.params.slug
</script>

<style scoped></style>
