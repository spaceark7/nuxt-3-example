<template>
  <div>
    <h1 class="text-2xl">Categories</h1>

    <ul>
      <NuxtLink to="/products/categories/car">
        <li>Car</li>
      </NuxtLink>
      <NuxtLink to="/products/categories/truck">
        <li>Truck</li>
      </NuxtLink>
      <NuxtLink to="/products/categories/bike">
        <li>Bike</li>
      </NuxtLink>
    </ul>

    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
