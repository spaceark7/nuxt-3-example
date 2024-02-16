<template>
  <div>
    <div v-for="(item, index) in data?.data[0].attributes.contentSections" :key="index">
      <SectionRenderer :section_name="item.__component" :data="item" />
    </div>
    <!-- <HeroSection />
    <Wrapper>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit
        odit sequi quas, optio similique eaque, quisquam accusamus est aperiam,
        accusantium sed assumenda mollitia sint architecto culpa voluptatem
        cumque eveniet amet libero numquam obcaecati dolore nihil? Voluptate
        aperiam tenetur eveniet iusto quaerat fuga veritatis eligendi iure eius,
        pariatur exercitationem vitae eum vero consequuntur fugit sunt nostrum
        beatae dolor laborum soluta nam obcaecati. Fugit minima cupiditate vitae
        doloremque cum, illo fuga amet ullam iste. Incidunt iure velit, officia
        quam fugiat at a nobis doloremque saepe blanditiis? Modi, perspiciatis
        sit! Mollitia molestias perferendis provident exercitationem quasi
        dolore aut blanditiis deleniti nihil tempora!
      </div>
    </Wrapper>
    <Wrapper>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit
        odit sequi quas, optio similique eaque, quisquam accusamus est aperiam,
        accusantium sed assumenda mollitia sint architecto culpa voluptatem
        cumque eveniet amet libero numquam obcaecati dolore nihil? Voluptate
        aperiam tenetur eveniet iusto quaerat fuga veritatis eligendi iure eius,
        pariatur exercitationem vitae eum vero consequuntur fugit sunt nostrum
        beatae dolor laborum soluta nam obcaecati. Fugit minima cupiditate vitae
        doloremque cum, illo fuga amet ullam iste. Incidunt iure velit, officia
        quam fugiat at a nobis doloremque saepe blanditiis? Modi, perspiciatis
        sit! Mollitia molestias perferendis provident exercitationem quasi
        dolore aut blanditiis deleniti nihil tempora!
      </div>
    </Wrapper>
    <Wrapper>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fugit
        odit sequi quas, optio similique eaque, quisquam accusamus est aperiam,
        accusantium sed assumenda mollitia sint architecto culpa voluptatem
        cumque eveniet amet libero numquam obcaecati dolore nihil? Voluptate
        aperiam tenetur eveniet iusto quaerat fuga veritatis eligendi iure eius,
        pariatur exercitationem vitae eum vero consequuntur fugit sunt nostrum
        beatae dolor laborum soluta nam obcaecati. Fugit minima cupiditate vitae
        doloremque cum, illo fuga amet ullam iste. Incidunt iure velit, officia
        quam fugiat at a nobis doloremque saepe blanditiis? Modi, perspiciatis
        sit! Mollitia molestias perferendis provident exercitationem quasi
        dolore aut blanditiis deleniti nihil tempora!
      </div>
    </Wrapper> -->
  </div>
</template>

<script setup lang="ts">
  import type { Content } from '~/types/content'

  const route = useRoute()
  const slug = route.params
  const data = await useFetcher<Content>('/data/pages.json', 'home-ret')

  console.log(data?.data[0])
</script>

<style scoped></style>
