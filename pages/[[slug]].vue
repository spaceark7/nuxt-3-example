<template>
  <div>
    <div
      v-for="(item, index) in content.data[0].attributes.contentSections"
      :key="index">
      <SectionRenderer :section_name="item.__component" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PageAttributes } from '~/types/content'
  const { find } = useStrapi()
  const route = useRoute()
  const slug = route.params

  const content = await find<PageAttributes>('pages', {
    filters: {
      slug: !slug.slug ? 'home-ret' : slug.slug
    }
  })


  // optional
  useHead(() => {
    return {
      title: content.data[0].attributes.seo.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: content.data[0].attributes.description
        }
      ]
    }
  })

  useSeoMeta({
    title: content.data[0].attributes.seo.metaTitle,
    description: content.data[0].attributes.description
  })
</script>

<style scoped></style>
