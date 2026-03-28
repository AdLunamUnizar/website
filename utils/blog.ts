import { queryCollection } from '#imports'

export type BlogPost = {
  path?: string
  title?: string
  description?: string
  date?: string
  photo?: string
  img?: string
  video?: string
  body?: unknown
}

const BLOG_DATE_PATTERN = /^\d{2}\/\d{2}\/\d{4}$/

export const parseBlogDate = (date?: string) => {
  if (!date || !BLOG_DATE_PATTERN.test(date)) {
    return null
  }

  const [day, month, year] = date.split('/').map(Number) as [number, number, number]
  const parsedDate = new Date(year, month - 1, day)

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate
}

export const isValidBlogPost = (
  post: BlogPost,
): post is Required<Pick<BlogPost, 'path' | 'title' | 'description' | 'date' | 'photo'>> & BlogPost => {
  return Boolean(post.path && post.title && post.description && post.photo && parseBlogDate(post.date))
}

export const sortBlogPostsByDateDesc = (posts: BlogPost[]) => {
  return [...posts]
    .filter(isValidBlogPost)
    .sort((left, right) => {
      const leftDate = parseBlogDate(left.date)?.getTime() ?? 0
      const rightDate = parseBlogDate(right.date)?.getTime() ?? 0

      return rightDate - leftDate
    })
}

export const fetchBlogPosts = async () => {
  const blogCollection = queryCollection as unknown as (collection: string) => {
    select: (...fields: string[]) => { all: () => Promise<BlogPost[]> }
  }

  const posts = await blogCollection('blog')
    .select('path', 'title', 'description', 'date', 'photo')
    .all()

  return sortBlogPostsByDateDesc(posts)
}

export const fetchLatestBlogPost = async () => {
  const posts = await fetchBlogPosts()

  return posts[0] ?? null
}
