<template>
  <div v-if="props.field?.as === 'email' || props.field?.as === 'text'">
    <BaseInputText
      :class="props.field.class"
      v-model="value"
      :field="props.field"
      :errorMessage="errorMessage" />
  </div>
  <div v-else-if="props.field?.as === 'password'">
    <BaseInputPassword
      :class="props.field.class"
      v-model="value"
      :field="props.field"
      :errorMessage="errorMessage" />
  </div>
</template>

<script setup lang="ts">
  import type { FieldProps } from '~/types/forms'

  const props = defineProps({
    field: {
      type: Object as PropType<FieldProps>,
      required: true
    }
  })

  const { value, errorMessage } = useField<any>(
    props.field.name,
    props.field.rules
  )
</script>

<style scoped></style>
