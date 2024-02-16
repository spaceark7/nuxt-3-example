import type { Content } from '~/types/content'
import type { ResponseType } from '~/types/response'

const useFetcher = async <T>(endpoint: any, slug: any) => {
  const config = useRuntimeConfig()
  console.log('useFetcher', endpoint)
  const url = config.public.apiUrl + endpoint

  // const { data, error } = await useFetch<ResponseType<T>>(url)
  const urlParamsObject = {
    filters: {
      slug: 'home-ret'
    }
  }

  const { data, error } = useAsyncData<T>(() =>
    $fetch(`${config.public.apiUrl}/pages?filters%5Bslug%5D=${slug}`)
  )

  console.log('data', data.value)

  // console.log('data2', data2)
  // console.log('error2', error2)

  if (error.value) {
    console.log('error', error.value.statusMessage)
    throw new Error(error.value.message)
  }
  return data.value ? (data.value as T) : null
}
export default useFetcher
