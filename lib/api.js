import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'


/* POSTS */
const postsDirectory = join(process.cwd(), '_posts')
const releasesDirectory = join(process.cwd(), '_releases')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'locale') {
      items[field] = data['locale']
    }
    if (field === 'public') {
      items[field] = data['public']
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = [], locale) {

  // only get post slugs
  const slugs = getPostSlugs()

  const posts = slugs
    // map posts slugs to actual post objects
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    // filter posts without the current locale
    .filter((post) => post.locale === locale)

  return posts
}


export function getReleaseSlugs() {
  return fs.readdirSync(releasesDirectory)
}

export function getReleaseBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '')
  const fullPath = join(releasesDirectory, `${realSlug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return JSON.parse(fileContents);
}


export function getAllReleases() {

  const slugs = getReleaseSlugs()
  const releases = slugs.map((slug) => getReleaseBySlug(slug))
  return releases
}