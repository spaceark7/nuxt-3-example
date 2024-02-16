<template>
  <div>
    <form
      @submit="onSubmit"
      :class="props.schema?.containerClass || 'tw-grid tw-gap-4 '">
      <div v-for="field in props.schema?.fields">
        <DynamicField :field="field" />
      </div>

      <Button class="tw-w-full tw-mt-8" type="submit" label="Submit" />
    </form>
  </div>
</template>

<script setup lang="ts">
  import type { FormSchemaProps } from '~/types/forms'
  const { handleSubmit } = useForm()
  const props = defineProps({
    schema: Object as PropType<FormSchemaProps>
  })

  const submit = (values: any) => {
    console.log('submit', values)
    emit('submit', values)
  }
  const onSubmit = handleSubmit(submit, (errors) => {
    alert('Errors: ' + JSON.stringify(errors))
  })

  const emit = defineEmits(['submit'])
</script>

<style scoped></style>
