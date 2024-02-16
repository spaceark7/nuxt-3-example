<template>
  <div class="tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center">
    <div
      class="tw-w-full tw-max-w-md tw-p-8 tw-bg-white/5 tw-shadow-md tw-rounded-md tw-shadow-lg">
      <h1 class="tw-text-center tw-text-3xl tw-font-bold tw-mb-8">Register</h1>

      <DynamicForm :schema="formSchema" @submit="onSubmit" />
      <div>
        <p class="tw-text-white tw-mt-4 tw-text-center">
          Already have an account?
          <NuxtLink to="/auth/login" class="tw-text-blue-500">Login</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormSchemaProps } from '~/types/forms'
  import * as yup from 'yup'
  const { register } = useStrapiAuth()
  const formSchema: FormSchemaProps = {
    fields: [
      {
        name: 'username',
        label: 'Username',
        as: 'text',
        rules: yup.string().required()
      },
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
      const response = await register({
        username: values.username,
        email: values.email,
        password: values.password
      })

      alert('Success: ' + JSON.stringify(response))
    } catch (error) {
      console.log('Error: ', error)
      alert('Error: ' + (error as any).error.message)
    }
  }

  definePageMeta({
    title: 'Register',
    layout: 'auth-layout'
  })
</script>

<style scoped></style>
