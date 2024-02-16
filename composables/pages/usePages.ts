import { type ContentDTO } from '~/types/content'

const usePages = async (params: any) => {
  console.log('usePages', params)

  const { data, error } = await useFetch<ContentDTO>(
    'http://localhost:3000/data/pages.json'
  )

  if (error.value) {
    console.log('error', error.value.statusMessage)
    throw new Error(error.value.message)
  }
  return data.value
}
export default usePages
