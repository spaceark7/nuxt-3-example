export interface Content {
  data: Datum[]
  meta: Meta
}

export interface Datum {
  id: number
  attributes: PurpleAttributes
}

export interface PurpleAttributes {
  shortName: string
  slug: string
  heading: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  contentSections: ContentSection[]
  seo: SEO
}

export interface ContentSection {
  id: number
  __component: string
  title: string
  description: DescriptionElement[] | string
  picture?: ShareImage
  buttons?: Button[]
}

export interface Button {
  id: number
  url: string
  newTab: boolean
  text: string
  type: string
}

export interface DescriptionElement {
  type: string
  children: Child[]
}

export interface Child {
  text: string
  type: string
}

export interface ShareImage {
  data: DAT[] | DAT | null
}

export interface DAT {
  id: number
  attributes: DataAttributes
}

export interface DataAttributes {
  url: string
  alternativeText: null
  caption: null
  width: number
  height: number
}

export interface SEO {
  id: number
  metaTitle: string
  metaDescription: string
  shareImage: ShareImage
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
