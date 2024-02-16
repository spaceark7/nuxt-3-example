<template>
  <div class="tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center">
    <div
      class="tw-w-full tw-max-w-md tw-p-8 tw-bg-white/5 tw-shadow-md tw-rounded-md tw-shadow-lg">
      <h1 class="tw-text-center tw-text-3xl tw-font-bold tw-mb-8">Login</h1>

      <DynamicForm :schema="formSchema" @submit="onSubmit" />

      <div>
        <p class="tw-text-white tw-mt-4 tw-text-center">
          Don't have an account?
          <NuxtLink to="/auth/register" class="tw-text-blue-500"
            >Register</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormSchemaProps } from '~/types/forms'
  import * as yup from 'yup'
  const { login } = useStrapiAuth()

  const formSchema: FormSchemaProps = {
    fields: [
      {
        name: 'email',
        label: 'Email',
        as: 'email',
        rules: yup.string().email().required()
      },

      {
        name: 'password',
        label: 'Password',
        as: 'password',
        rules: yup.string().min(6).required()
      }
    ],
    containerClass: 'tw-grid tw-gap-4'
  }

  const onSubmit = async (values: any) => {
    try {
      const response = await login({
        identifier: values.email,
        password: values.password
      })

      navigateTo('/')
    } catch (error) {
      alert('Error: ' + (error as any).message)
    }
  }

  definePageMeta({
    title: 'Login',
    layout: 'auth-layout'
  })
</script>

<style scoped></style>
