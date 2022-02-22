import path from "path"
import fs from "fs/promises"
import parseFrontMatter from "front-matter"
import invariant from "tiny-invariant"
import { marked } from "marked"
import hljs from "highlight.js"

export type Post = {
  slug: string
  title: string
  shortDescription: string
  category: string
  coverImage: string
  html: string
}

export type PostMarkdownAttributes = {
  title: string
  shortDescription: string
  category: string
  coverImage: string
}

// path relative to server output
const postsPath = path.join(__dirname, "../..", "posts")

function isValidPostAttributes(
  attributes: any,
): attributes is PostMarkdownAttributes {
  return (
    attributes?.title && attributes?.shortDescription && attributes?.category
  )
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath)

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename))
      const { attributes } = parseFrontMatter(file.toString())
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data`,
      )
      return {
        slug: filename.replace(/\.md$/, ""),
        ...attributes
      }
    }),
  )
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".md")
  const file = await fs.readFile(filepath)
  const { attributes, body } = parseFrontMatter(file.toString())
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`,
  )
  marked.setOptions({
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })
  const html = marked(body)
  console.log(body, html)
  return {
    slug,
    html,
    ...attributes
  }
}
