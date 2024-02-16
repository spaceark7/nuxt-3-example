<template>
  <div>
    <ul>
      <NuxtLink :to="'/products/detail/a'">
        <li>Product 1</li>
      </NuxtLink>
      <NuxtLink :to="'/products/detail/b'">
        <li>Product 2</li>
      </NuxtLink>
      <NuxtLink :to="'/products/detail/c'">
        <li>Product 3</li>
      </NuxtLink>
    </ul>

    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
