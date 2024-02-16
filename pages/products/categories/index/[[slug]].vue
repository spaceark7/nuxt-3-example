<template>
  <div>
    Children of category

    <div>this is list category of {{ slug }}</div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const { slug } = route.params
</script>

<style lang="scss" scoped></style>
