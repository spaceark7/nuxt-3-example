<template>
  <div class="tw-flex tw-flex-col tw-gap-2">
    <label :for="field.name" class="tw-text-white tw-text-sm">{{
      field.label
    }}</label>
    <Password
      v-model="model"
      toggleMask
      :feedback="false"
      inputClass="tw-w-full"
      :invalid="errorMessage ? true : false"
      :inputClass="class"
      :pt="{
        hideIcon: {
          class: 'tw-text-white'
        },
        showIcon: {
          class: 'tw-text-white'
        }
      }" />
    <div class="tw-text-red-500 tw-text-xs tw-mt-1">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
  import type { Nullable } from 'primevue/ts-helpers'
  import type { FieldProps } from '~/types/forms'

  const model = defineModel<Nullable<string>>()
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: false
    },
    field: {
      type: Object as PropType<FieldProps>,
      required: true
    },
    errorMessage: {
      type: String,
      required: false
    }
  })

  const emit = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
